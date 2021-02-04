//Validate correct pattern for license plate
function validate(plate){
    //regex pattern for a valid license plate (D,F are excluded in Ecuador)
    pattValidPlate = /^[A-CEG-Z][A-Z]{2}[/-][0-9]{3,4}$/
    return(pattValidPlate.test(plate))
}
module.exports = validate;