from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (or specify your frontend URL, e.g., "http://localhost:5173")
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define the root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Investment Assessment API"}

# Load the trained model and label encoder
model = joblib.load("model/model.pkl")
label_encoder = joblib.load("model/label_encoder.pkl")

class InvestmentData(BaseModel):
    funding_total_usd: float
    funding_rounds: int
    market: str
    founded_year: int

@app.post("/assess/")
def assess_investment(data: InvestmentData):
    try:
        # Encode the market category
        market_encoded = label_encoder.transform([data.market])[0]
    except ValueError:
        market_encoded = -1  # Assign a default value for unseen labels

    # Calculate company age
    current_year = 2020
    company_age = max(0, min(current_year - data.founded_year, 100))  # Cap age at 100

    # Prepare the feature array
    features = np.array([[data.funding_total_usd, data.funding_rounds, market_encoded, company_age]])

    # Predict the probability of success
    success_probability = model.predict_proba(features)[0][1]

    # Determine risk level based on success probability
    if success_probability > 0.85:
        risk_level = "Low Risk"
    elif success_probability > 0.70:
        risk_level = "Moderate Risk"
    else:
        risk_level = "High Risk"

    return {
        "success_probability": success_probability,
        "risk_level": risk_level
    }