const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
 
app.use(cors());
app.use(express.json());
 
app.use(express.static('public'));
 
app.post('/api/register-patient', (req, res) => {
    const patientData = req.body;
    console.log("New Patient Received:", patientData);
    res.status(200).send({ message: "Registration successful!" });
});