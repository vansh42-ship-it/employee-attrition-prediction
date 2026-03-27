import pandas as pd
from sklearn.utils import resample

# Load dataset
df = pd.read_csv("WA_Fn-UseC_-HR-Employee-Attrition.csv")

# Drop useless columns
df = df.drop(['EmployeeCount', 'Over18', 'StandardHours', 'EmployeeNumber'], axis=1)

# Create new useful features
df["IncomePerYear"] = df["MonthlyIncome"] * 12
df["ExperienceRatio"] = df["YearsAtCompany"] / (df["Age"] + 1)

# Fix unrealistic values (basic cleaning)
df = df[df["MonthlyIncome"] > 1000]
df = df[df["Age"] >= 18]

# Convert target
df["Attrition"] = df["Attrition"].map({"Yes": 1, "No": 0})

# Balance dataset
df_yes = df[df.Attrition == 1]
df_no = df[df.Attrition == 0]

df_yes_upsampled = resample(df_yes, replace=True, n_samples=len(df_no), random_state=42)
df_balanced = pd.concat([df_no, df_yes_upsampled])

# Shuffle
df_balanced = df_balanced.sample(frac=1, random_state=42)

# Save clean dataset
df_balanced.to_csv("clean_attrition.csv", index=False)

print("✅ Clean dataset saved as clean_attrition.csv")