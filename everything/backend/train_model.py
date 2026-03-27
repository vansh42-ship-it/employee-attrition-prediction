import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
from sklearn.utils import resample

def train_attrition_model(data_path):
    print("Loading dataset...")
    df = pd.read_csv(data_path)

    # Drop useless columns
    df = df.drop(columns=['EmployeeCount','Over18','StandardHours','EmployeeNumber'], errors='ignore')

    # Target
    df['Attrition'] = df['Attrition'].map({"Yes":1, "No":0})

    # 🔥 FEATURE ENGINEERING (GAME CHANGER)
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

    X = df[selected_features]
    y = df['Attrition']

    # Encode categorical features
    encoders = {}
    for col in X.select_dtypes(include='object').columns:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        encoders[col] = le

    # 🔥 BALANCE DATASET
    df_bal = pd.concat([X, y], axis=1)

    df_yes = df_bal[df_bal.Attrition == 1]
    df_no = df_bal[df_bal.Attrition == 0]

    df_yes_upsampled = resample(
        df_yes,
        replace=True,
        n_samples=len(df_no),
        random_state=42
    )

    df_balanced = pd.concat([df_no, df_yes_upsampled])
    df_balanced = df_balanced.sample(frac=1, random_state=42)

    X = df_balanced[selected_features]
    y = df_balanced['Attrition']

    print("Balanced dataset:")
    print(y.value_counts())

    # Split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, shuffle=True
    )

    # Scale
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    # Train model
    print("Training model...")
    model = RandomForestClassifier(
        n_estimators=300,
        max_depth=15,
        class_weight="balanced",
        random_state=42
    )
    model.fit(X_train, y_train)

    # Evaluate
    y_pred = model.predict(X_test)
    print("\nAccuracy:", accuracy_score(y_test, y_pred))
    print("\nClassification Report:\n", classification_report(y_test, y_pred))

    # 🔥 Feature importance (for viva + explanation later)
    importances = pd.DataFrame({
        "feature": selected_features,
        "importance": model.feature_importances_
    }).sort_values("importance", ascending=False)

    print("\n🔥 Top Features:\n", importances.head(10))

    # Save everything
    joblib.dump(model, 'model.pkl')
    joblib.dump(scaler, 'scaler.pkl')
    joblib.dump(encoders, 'encoders.pkl')
    joblib.dump(selected_features, 'features.pkl')

    print("\n✅ Model + files saved!")

if __name__ == "__main__":
    train_attrition_model("WA_Fn-UseC_-HR-Employee-Attrition.csv")