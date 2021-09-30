// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add } from '../calculation.js';

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

