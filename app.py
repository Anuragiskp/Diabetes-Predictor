from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load('model_diabetes.pkl')

@app.route('/', methods=['POST'])

def predict():
    data = request.get_json()
    print(data)

    # Extract features from input data
    features = preprocess(data)

    # Make prediction
    prediction = model.predict(features.reshape(1,-1))
    print(prediction)
    prediction_list = prediction.tolist()

    # Return the prediction as JSON
    return jsonify({'Prediction': prediction_list})

# Preprocessing function
def preprocess(data):
    # Convert data to numpy array
    age = int(data['age'])
    polyuria = int(data['polyuria'])
    polydipsia = int(data['polydipsia'])
    sudden_weight_loss = int(data['sudden_weight_loss'])
    weakness = int(data['weakness'])
    polyphagia = int(data['polyphagia'])
    genital_thrush = int(data['genital_thrush'])
    visual_blurring = int(data['visual_blurring'])
    itching = int(data['itching'])
    irritability = int(data['irritability'])
    delayed_healing = int(data['delayed_healing'])
    partial_paresis = int(data['partial_paresis'])
    muscle_stiffness = int(data['muscle_stiffness'])
    alopecia = int(data['alopecia'])
    obesity = int(data['obesity'])
    
    #encoding categorial variables
    gender_mapping = {'M': 1, 'F': 0} 
    gender = gender_mapping[data['gender']]
    
    processed_data = np.array([age, gender, polyuria, polydipsia, sudden_weight_loss, weakness, polyphagia, genital_thrush, visual_blurring, itching, irritability, delayed_healing, partial_paresis, muscle_stiffness, alopecia, obesity])
    print(processed_data)
    return processed_data


if __name__ == '__main__':
    app.run(debug=True, port=5000)