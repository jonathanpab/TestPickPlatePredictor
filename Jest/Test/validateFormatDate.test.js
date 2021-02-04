const validateFormatDate = require('../Class/valideFormatDate');

test('valide 29-02-2021 to false', ()=>{
    expect(validateFormatDate("29-02-2021")).toBe(false);
});

test('valide 28-02-2021 to true', ()=>{
    expect(validateFormatDate("28-02-2021")).toBe(true);
});

test('valide 28-02-2020 to true', ()=>{
    expect(validateFormatDate("29-02-2020")).toBe(true);
});

test('valide 32-12-2020 to false', ()=>{
    expect(validateFormatDate("32-12-2020")).toBe(false);
});

test('valide 01-13-2020 to false', ()=>{
    expect(validateFormatDate("01-13-2020")).toBe(false);
});