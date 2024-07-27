import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  const [inputData, setInputData] = useState({}); 
  const [prediction, setPrediction] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prevState =>{return{ ...prevState, [name]: value }});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
        fetch('http://localhost:5000/', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
          const prediction = data.Prediction[0]; 
          setPrediction(prediction);
        })
}

  return (
    <div className="form-container">
      <h1>Diabetes Test</h1>
      <h4>Enter Patient's details</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age:</label>
          <input type="text" name="age" onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div>
          <label>Polyuria(Whether the patient experienced excessive urination or not.):</label>
          <select name="polyuria" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Polydipsia(Whether the patient experienced excessive thirst/excess drinking or not.):</label>
          <select name="polydipsia" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Sudden weight loss(Whether patient had an episode of sudden weight loss or not.):</label>
          <select name="sudden_weight_loss" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Weakness(Whether patient had an episode of feeling weak.):</label>
          <select name="weakness" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Polyphagia(Whether patient had an episode of excessive/extreme hunger or not.):</label>
          <select name="polyphagia" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Genital thrush(Whether patient had a yeast infection or not.):</label>
          <select name="genital_thrush" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Visual blurring(Whether patient had an episode of blurred vision.):</label>
          <select name="visual_blurring" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Itching(Whether patient had an episode of itch.):</label>
          <select name="itching" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Irritability(Whether patient had an episode of irritability.):</label>
          <select name="irritability" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Delayed healing(Whether patient had an noticed delayed healing when wounded.):</label>
          <select name="delayed_healing" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Partial paresis(Whether patient had an episode of weakening of a muscle/group of muscles or not.):</label>
          <select name="partial_paresis" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Muscle stiffness(Whether patient had an episode of muscle stiffness.):</label>
          <select name="muscle_stiffness" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Alopecia(Whether patient experienced hair loss or not.):</label>
          <select name="alopecia" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label>Obesity(Whether patient can be considered obese or not using his body mass index.):</label>
          <select name="obesity" onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <button type="submit">Predict</button>
      </form>
      {(prediction === 0 || prediction === 1) && (
        <p className="prediction-value">
        {prediction === 1 ? "Patient might have Diabetes" : "Patient is not likely to have Diabetes"}
        </p>
)}
    </div>
  );
};

export default FormComponent;