//Validate a license plate to know is normal or able to work
function validateNormalPlate(plate){
    //regex pattern to validate if a license plate is able to work
    //A, U, Z comercial vehicles
    //E Goberment vehicles
    //X Oficial use vehicles
    //M, S municipality vehicles
    pattWorkablePlate = /^[A-CEG-Z][AEMSUWXZ][A-Z][/-][0-9]{3,4}$/
    //regex pattern to validate if a license plate is normal
    pattNormalPlate = /^[A-CEG-Z][B-DF-LN-RTVY][A-Z][/-][0-9]{3,4}$/
    if(pattWorkablePlate.test(plate)){
        return(false);
    }else if(pattNormalPlate.test(plate)){
        return(true);
    }
}

module.exports = validateNormalPlate;