//range time allowed
var range = ['07:00','09:00','16:00','19:30']
//validate if a specific time is in or out of a range.
function validateTimeRange(time){
    return(time<range[0] || (time > range[1]&&time < range[2]) || time > range[3]);
}

module.exports = validateTimeRange;