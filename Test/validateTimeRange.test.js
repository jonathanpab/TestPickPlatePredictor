const validateTimeRange = require('../Class/validateTimeRange');

test('valide 23:59 to true', ()=>{
    expect(validateTimeRange("23:59")).toBe(true);
});

test('valide 07:59 to false', ()=>{
    expect(validateTimeRange("07:59")).toBe(false);
});

test('valide 09:31 to true', ()=>{
    expect(validateTimeRange("09:31")).toBe(true);
});

test('valide 09:30 to false', ()=>{
    expect(validateTimeRange("09:00")).toBe(false);
});