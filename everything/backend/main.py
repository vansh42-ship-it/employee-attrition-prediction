from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np

app = FastAPI()

#CORS FIX (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model files
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")
encoders = joblib.load("encoders.pkl")
features = joblib.load("features.pkl")

@app.post("/predict")
def predict(data: dict):
    try:
        input_data = []

        for col in features:
            if col not in data:
                return {"error": f"Missing field: {col}"}

            val = data[col]

            # Encode categorical safely
            if col in encoders:
                try:
                    val = encoders[col].transform([val])[0]
                except:
                    return {"error": f"Invalid value '{val}' for {col}"}

            input_data.append(val)

        input_array = scaler.transform([input_data])

        prob = model.predict_proba(input_array)[0][1]
        pred = int(prob > 0.4)

        return {
            "attrition": pred,
            "probability": float(prob)
        }

    except Exception as e:
        return {"error": str(e)}