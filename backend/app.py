from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import os
from PIL import Image
import io

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  # Allow requests from React frontend

# Load your trained CNN model
model = load_model("model/bloodg_cftn.h5")

blood_group=np.array(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])

@app.route("/", methods=["GET"])
def home():
    return "<h1>Flask Server is Running</h1>"

@app.route("/predict", methods=["POST"])
def predict():

    file = request.files["file"]

    try:
        # Read image and convert to model input format
        img = Image.open(file.stream).convert('L') 
        img = img.resize((100, 100))
        img_array = image.img_to_array(img)
        input_tensor = np.expand_dims(img_array, axis=0)

        # Predict using the model
        prediction = model.predict(input_tensor)
        class_index = np.argmax(prediction)
        group=blood_group[class_index]

        return jsonify({
            "prediction": group,
            "confidence": float(np.max(prediction))
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)




