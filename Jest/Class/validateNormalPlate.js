//Validate a license plate to know is normal or able to work
function validateNormalPlate(plate){
    pattWorkablePlate = /^[A-CEG-XZ][AEMSUWXZ][A-Z][/-][0-9]{3,4}$/
    pattNormalPlate = /^[A-CEG-XZ][B-DF-LN-RTVY][A-Z][/-][0-9]{3,4}$/
    if(pattWorkablePlate.test(plate)){
        return(false);
    }else if(pattNormalPlate.test(plate)){
        return(true);
    }
}

module.exports = validateNormalPlate;