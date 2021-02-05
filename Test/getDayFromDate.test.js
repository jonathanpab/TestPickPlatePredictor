const getDayFromDate = require('../Class/getDayFromDate');

test('day of 04-02-2021 to 4', ()=>{
    expect(getDayFromDate("04-02-2021")).toBe(4);
});

test('day of 12-11-2020 to 4', ()=>{
    expect(getDayFromDate("12-11-2020")).toBe(4);
});

test('day of 05-02-2021 to 5', ()=>{
    expect(getDayFromDate("05-02-2021")).toBe(5);
});

test('day of 21-11-2021 to 6', ()=>{
    expect(getDayFromDate("21-11-2020")).toBe(6);
});

test('day of 29-02-2021 to error', ()=>{
    expect(getDayFromDate("29-02-2021")).toBe(NaN);
});