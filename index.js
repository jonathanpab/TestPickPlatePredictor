const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const validate = require('./Jest/Class/validatePlate');
const validateFormatDate = require('./Jest/Class/validateFormatDate');
const validateFormatTime = require('./Jest/Class/validateFormatTime');
const pickPlatePredictor = require('./Jest/Class/pickPlatePredictor');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pickPlatePredictor.html'));
})

app.post('/validatePlate', async (req, res) => {
    try {
        var plate = req.body.plate;
        const resp = validate(plate);
        res.send(resp);
    } catch (error) {
        handleError(error);
    }
})

app.post('/validateDate', async (req, res) => {
    try {
        var date = req.body.date;
        const resp = validateFormatDate(date);
        res.send(resp);
    } catch (error) {
        handleError(error);
    }
})

app.post('/validateTime', async (req, res) => {
    try {
        var time = req.body.time;
        const resp = validateFormatTime(time);
        res.send(resp);
    } catch (error) {
        handleError(error);
    }
})

app.post('/validatePickPlatePredictor', async (req, res) => {    
    try {
        var plate = req.body.plate;
        var date = req.body.date;
        var time = req.body.time;
        const resp = pickPlatePredictor(plate, date, time);
        res.send(resp);
    } catch (error) {
        handleError(error);
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})