// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add, sub, mult, divison } from '../calculation.js';


const test = QUnit.test;



test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    const input1 = 3;
    const input2 = 5;
    const expected = 8;

    const actual = add(input1, input2);
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    const input1 = 4;
    const input2 = 20;
    const expected = 24;

    const actual = add(input1, input2);
    expect.equal(actual, expected);
});

test('sub function', (expect) => {
    const input1 = 4;
    const input2 = 2;
    const expected = 2;

    const actual = sub(input1, input2);
    expect.equal(actual, expected);
});
test('sub function', (expect) => {
    const input1 = 10;
    const input2 = 2;
    const expected = 8;

    const actual = sub(input1, input2);
    expect.equal(actual, expected);
});

test('mult function', (expect) => {
    const input1 = 2;
    const input2 = 2;
    const expected = 4;

    const actual = mult(input1, input2);
    expect.equal(actual, expected);
});
test('mult function', (expect) => {
    const input1 = 5;
    const input2 = 5;
    const expected = 25;

    const actual = mult(input1, input2);
    expect.equal(actual, expected);
});

test('div function ', (expect) => {
    const input1 = 20;
    const input2 = 5;
    const expected = 4;

    const actual = divison(input1, input2);
    expect.equal(actual, expected);
});

test('div function ', (expect) => {
    const input1 = 18;
    const input2 = 2;
    const expected = 9;

    const actual = divison(input1, input2);
    expect.equal(actual, expected);
});


