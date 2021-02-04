const validatePlateDay = require('../Class/validatePlateDay');

test('valide plate day AAB-0128 on 04-02-2021 to true', ()=>{
    expect(validatePlateDay("AAB-0128","04-02-2021")).toBe(true);
});

test('valide plate day ABC-0123 on 04-02-2021 to false', ()=>{
    expect(validatePlateDay("ABC-0123","04-02-2021")).toBe(false);
});

test('valide ABC-123 on 06-02-2021 to false', ()=>{
    expect(validatePlateDay("ABC-123","06-02-2021")).toBe(false);
});

test('valide ABC-0128 on 06-02-2021 to false', ()=>{
    expect(validatePlateDay("ABC-0128","06-02-2021")).toBe(false);
});