import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline

def train_attrition_model(data_path):
    print("Loading dataset...")
    df = pd.read_csv(data_path)

    # Drop useless columns
    df = df.drop(columns=['EmployeeCount','Over18','StandardHours','EmployeeNumber'], errors='ignore')

    # Target
    df['Attrition'] = df['Attrition'].map({"Yes":1, "No":0})

    # 🔥 FEATURE ENGINEERING
    df["LowIncome"] = (df["MonthlyIncome"] < 3000).astype(int)

    df["ExtremeStress"] = (
        (df["OverTime"] == "Yes") &
        (df["WorkLifeBalance"] <= 2)
    ).astype(int)

    df["LowSatisfaction"] = (df["JobSatisfaction"] <= 2).astype(int)

    df["HighRiskCombo"] = (
        (df["MonthlyIncome"] < 3000) &
        (df["JobSatisfaction"] <= 2) &
        (df["OverTime"] == "Yes")
    ).astype(int)

    # Selected features
    selected_features = [
        "Age",
        "MonthlyIncome",
        "Department",
        "JobRole",
        "YearsAtCompany",
        "TotalWorkingYears",
        "JobLevel",
        "DistanceFromHome",
        "StockOptionLevel",
        "OverTime",
        "JobSatisfaction",
        "WorkLifeBalance",
        "JobInvolvement",
        "PerformanceRating",

        # 🔥 NEW FEATURES
        "LowIncome",
        "ExtremeStress",
        "LowSatisfaction",
        "HighRiskCombo"
    ]

    X = df[selected_features].copy()
    y = df['Attrition']

    # Encode categorical features
    encoders = {}
    for col in X.select_dtypes(include='object').columns:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        encoders[col] = le

    # Split first with stratify — before any balancing
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Pipeline: SMOTE happens inside each CV fold — no leakage
    pipeline = Pipeline([
        ('smote', SMOTE(random_state=42)),
        ('scaler', StandardScaler()),
        ('model', RandomForestClassifier(
            n_estimators=300,
            max_depth=15,
            random_state=42
        ))
    ])

    # Honest cross-validation — SMOTE only sees training folds, never test folds
    print("Running 5-Fold Cross Validation...")
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    cv_scores = cross_val_score(pipeline, X_train, y_train, cv=cv, scoring='roc_auc')
    print(f"5-Fold CV AUC: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")

    # Train final model on full training set
    print("Training final model...")
    pipeline.fit(X_train, y_train)

    # Evaluate on held-out test set
    y_pred = pipeline.predict(X_test)
    print("\nAccuracy:", accuracy_score(y_test, y_pred))
    print("\nClassification Report:\n", classification_report(y_test, y_pred))

    # Feature importance from the RF step inside the pipeline
    rf_model = pipeline.named_steps['model']
    importances = pd.DataFrame({
        "feature": selected_features,
        "importance": rf_model.feature_importances_
    }).sort_values("importance", ascending=False)

    print("\n🔥 Top Features:\n", importances.head(10))

    # Save scaler and model separately so main.py works without changes
    scaler = pipeline.named_steps['scaler']
    joblib.dump(rf_model, 'model.pkl')
    joblib.dump(scaler, 'scaler.pkl')
    joblib.dump(encoders, 'encoders.pkl')
    joblib.dump(selected_features, 'features.pkl')

    print("\n✅ Model + files saved!")

if __name__ == "__main__":
    train_attrition_model("WA_Fn-UseC_-HR-Employee-Attrition.csv")
