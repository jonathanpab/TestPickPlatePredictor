//validate if a specific time is in or out of a range.
var range = ['07:00','09:00','16:00','19:30']
function validateTimeRange(time){
    if(time<range[0] || (time > range[1]&&time < range[2]) || time > range[3]){
        return (true);
    }else{
        return(false);
    }
}

module.exports = validateTimeRange;