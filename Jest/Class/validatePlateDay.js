const getDayFromDate = require('./getDayFromDate');

//numbers that aren't able to road
var NotAbleFinalNumbers = [[],["1","2"],["3","4"],["5","6"],["7","8"],["9","0"],[]]; 

//validate if plate is not able to be on road on a day
function vaidatePlateDay(plate, date){ 
    if(NotAbleFinalNumbers[getDayFromDate(date)].includes(plate.charAt(plate.length-1))){
        return(true);
    }else{
        return(false);
    }
}

module.exports = vaidatePlateDay;