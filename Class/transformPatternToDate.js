//transform a date with a pattern in a date object
function transformPatternToDate(date, patt){
    var moment = require('moment'); // library to transform string pattern to date.
    var dateMoment = moment(date, patt);
    var d = dateMoment.toDate();
    return(d);
}

module.exports = transformPatternToDate;