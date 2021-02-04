const validateNormalPlate = require('../Class/validateNormalPlate');

test('valide work plate AAB-0123 to false', ()=>{
    expect(validateNormalPlate("AAB-0123")).toBe(false);
});

test('valide work plate ABC-0123 to true', ()=>{
    expect(validateNormalPlate("ABC-0123")).toBe(true);
});

test('valide ABC-123 to true', ()=>{
    expect(validateNormalPlate("ABC-123")).toBe(true);
});

test('valide ABC-0123 to true', ()=>{
    expect(validateNormalPlate("ABC-0123")).toBe(true);
});