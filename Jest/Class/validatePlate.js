//Validate correct path for license plate
function validate(plate){
    pattValidPlate = /^[A-CEG-XZ][A-Z]{2}[/-][0-9]{3,4}$/
    if(pattValidPlate.test(plate)){
        return(true);
    }else{
        return(false);
    }
}
module.exports = validate;