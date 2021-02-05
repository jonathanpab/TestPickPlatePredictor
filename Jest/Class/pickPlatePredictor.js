//returns if a plate is able to be on road in an specific date in a specific time.
const validateNormalPlate = require('./validateNormalPlate');
const validatePlateDay = require('./validatePlateDay');
const validateTimeRange = require('./validateTimeRange');

const pickPlatePredictor = function (plateNumber, date, time) {
    if(validateNormalPlate(plateNumber)){
        if(validatePlateDay(plateNumber,date)){
            return(validateTimeRange(time));
        }else{
            return(true);
        }
    }else{
        return(true);
    }
}

module.exports = pickPlatePredictor;