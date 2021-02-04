const validate = require('./../Class/validatePlate');

test('valide ABC123 to Invalid Plate', ()=>{
    expect(validate("ABC123")).toBe(false);
});

test('valide ABC-00123 to Invalid Plate', ()=>{
    expect(validate("ABC-00123")).toBe(false);
});

test('valide DBC-0123 to Invalid Plate', ()=>{
    expect(validate("DBC-0123")).toBe(false);
});

test('valide ABC-123 to Valid Plate', ()=>{
    expect(validate("ABC-123")).toBe(true);
});

test('valide ABC-0123 to Valid Plate', ()=>{
    expect(validate("ABC-0123")).toBe(true);
});