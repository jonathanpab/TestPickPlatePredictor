const getDayFromDate = require('./getDayFromDate');

//numbers that aren't able to road
var NotAbleFinalNumbers = [[],["1","2"],["3","4"],["5","6"],["7","8"],["9","0"],[]]; 

//validate if plate is not able to be on road on a day
function vaidatePlateDay(plate, date){ 
    var day = getDayFromDate(date);
    var lastChart = plate.charAt(plate.length-1);
    
    return(NotAbleFinalNumbers[day].includes(lastChart));
}

module.exports = vaidatePlateDay;