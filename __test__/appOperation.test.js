const { multiply, add } = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(multiply(5, 0)).toBe(0);
});

test("addition function", ()=> {
    expect(add(5, 10)).toBe(15);
});