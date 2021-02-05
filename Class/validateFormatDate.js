//validate correct pattern of a date
const validateFormatDate = function (date) {
    //regex pattern for a valid date since 0 until 9999
    pattDate =  /^(?:(?:(0?[1-9]|1[0-9]|2[0-8])[-](0?[1-9]|1[0-2])|(29|30)[-](0?[13-9]|1[0-2])|(31)[-](0?[13578]|1[02]))[-](0{2,3}[1-9]|0{1,2}[1-9][0-9]|0?[1-9][0-9]{2}|[1-9][0-9]{3})|(29)[-](0?2)[-]([0-9]{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    return(pattDate.test(date));
}

module.exports = validateFormatDate;