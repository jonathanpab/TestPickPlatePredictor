const validateFormatTime = require('../Class/valideFormatTime');

test('valide 24:00 to false', ()=>{
    expect(validateFormatTime("24:00")).toBe(false);
});

test('valide 23:59 to true', ()=>{
    expect(validateFormatTime("23:59")).toBe(true);
});

test('valide 23-59 to false', ()=>{
    expect(validateFormatTime("23-59")).toBe(false);
});

test('valide 00:00 to true', ()=>{
    expect(validateFormatTime("00:00")).toBe(true);
});