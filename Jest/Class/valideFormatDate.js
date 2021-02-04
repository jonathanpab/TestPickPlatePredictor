//validate correct pattern of a date
function validateFormatDate(date){
    pattDate =  /^(?:(?:(0?[1-9]|1[0-9]|2[0-8])[-](0?[1-9]|1[0-2])|(29|30)[-](0?[13-9]|1[0-2])|(31)[-](0?[13578]|1[02]))[-](0{2,3}[1-9]|0{1,2}[1-9][0-9]|0?[1-9][0-9]{2}|[1-9][0-9]{3})|(29)[-](0?2)[-]([0-9]{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    if(pattDate.test(date)){
        return(true);
    }else{
        return(false);
    }
}

module.exports = validateFormatDate;