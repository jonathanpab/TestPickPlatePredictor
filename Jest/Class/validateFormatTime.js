//validate correct pattern of time
function validateFormatTime(time){
    pattTime =  /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    if(pattTime.test(time)){
        return(true);
    }else{
        return(false);
    }
}

module.exports = validateFormatTime;