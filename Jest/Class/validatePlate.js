//Validate correct path for license plate
function validate(plate){
    pattValidPlate = /^[A-CEG-XZ][A-Z]{2}[/-][0-9]{3,4}$/
    if(pattValidPlate.test(plate)){
        return("Valid Plate")
    }else{
        return("Invalid Plate")
    }
}
module.exports = validate;