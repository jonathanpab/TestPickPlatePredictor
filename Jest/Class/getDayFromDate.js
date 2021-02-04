const transformPatternToDate = require('./transformPatternToDate');

//obtains the day of a week from a date
function getDayFromDate(date){ 
    d = transformPatternToDate(date,"DD/MM/YYYY");
    return(d.getDay());
}

module.exports = getDayFromDate;