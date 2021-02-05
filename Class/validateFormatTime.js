//validate correct pattern of time
const validateFormatTime = function (time) {
    //regex pattern for a valid time. Since 00:00 until 23:59
    pattTime =  /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    return(pattTime.test(time))
}

module.exports = validateFormatTime;