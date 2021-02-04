const validate = require('./../Class/validatePlate');

test('valide ABC123 to Invalid Plate', ()=>{
    expect(validate("ABC123")).toMatch("Invalid Plate");
});

test('valide ABC-123 to Valid Plate', ()=>{
    expect(validate("ABC-123")).toMatch("Valid Plate");
});