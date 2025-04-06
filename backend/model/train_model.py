import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# SMOTE for class balancing
from imblearn.over_sampling import SMOTE

# Get the absolute path to the data file
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, "../data/investments_VC.csv")

# Load the dataset
df = pd.read_csv(data_path, encoding="latin1")

# Clean column names
df.columns = df.columns.str.strip()

# Clean 'funding_total_usd' column
df['funding_total_usd'] = pd.to_numeric(df['funding_total_usd'].str.replace(',', '').str.strip(), errors='coerce')

# Drop rows with missing required fields
df = df.dropna(subset=['funding_total_usd', 'funding_rounds', 'founded_year', 'status', 'market'])

# Convert 'status' to binary target
df['is_successful'] = df['status'].apply(lambda x: 1 if x in ['operating', 'acquired'] else 0)

# Encode 'market'
le = LabelEncoder()
df['market_encoded'] = le.fit_transform(df['market'])

# Feature engineering
current_year = 2020
df['company_age'] = current_year - df['founded_year']

# Select features
X = df[['funding_total_usd', 'funding_rounds', 'market_encoded', 'company_age']]
y = df['is_successful']

# Apply SMOTE to balance the dataset
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X, y)

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

print("X_train shape:", X_train.shape)
print("y_train shape:", y_train.shape)

# Train Random Forest with class weighting
model = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
model.fit(X_train, y_train)

print("Model training completed. Model:", model)

# Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")
print("Classification Report:\n", classification_report(y_test, y_pred))

# Save model and label encoder
model_dir = os.path.join(script_dir, "../model")
os.makedirs(model_dir, exist_ok=True)
joblib.dump(model, os.path.join(model_dir, "model.pkl"))
joblib.dump(le, os.path.join(model_dir, "label_encoder.pkl"))
joblib.dump(['funding_total_usd', 'funding_rounds', 'market_encoded', 'company_age'], os.path.join(model_dir, "feature_columns.pkl"))
