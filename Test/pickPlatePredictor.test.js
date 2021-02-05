const pickPlatePredictor = require('../Class/pickPlatePredictor');

test('valide plate day ABC-0128 on 04-02-2021 at 07:00 to false', ()=>{
    expect(pickPlatePredictor("ABC-0128","04-02-2021", "07:00")).toBe(false);
});

test('valide plate day AAC-0123 (license plate of work) on 04-02-2021 at 07:13 to true', ()=>{
    expect(pickPlatePredictor("AAC-0128","04-02-2021","07:13")).toBe(true);
});

test('valide ABC-128 on 04-02-2021 at 07:15 to false', ()=>{
    expect(pickPlatePredictor("ABC-128","04-02-2021","07:15")).toBe(false);
});

test('valide ABC-128 on 04-02-2021 at 06:59 to false', ()=>{
    expect(pickPlatePredictor("ABC-128","04-02-2021","06:59")).toBe(true);
});

test('valide plate day AAC-0123 (license plate of work) on 04-02-2021 at 07:13 to true', ()=>{
    expect(pickPlatePredictor("AWC-0128","04-02-2021","07:00")).toBe(true);
});