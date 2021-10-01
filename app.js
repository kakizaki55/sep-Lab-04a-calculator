
import { add, sub, mult, divison, modulo, pythagorean } from './calculation.js';

const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');
const calButton = document.getElementById('calculate');
const answer = document.getElementById('answer');
const mathSymble = document.getElementById('math-fucntion');

// const num1Button = document.getElementById('num1');
// const num2Button = document.getElementById('num2');
// const num3Button = document.getElementById('num3');
// const num4Button = document.getElementById('num4');
// const num5Button = document.getElementById('num5');
// const num6Button = document.getElementById('num6');
// const num7Button = document.getElementById('num7');
// const num8Button = document.getElementById('num8');
// const num9Button = document.getElementById('num9');
// const number = 0;


// num1Button.addEventListener('click', () =>{
//     input1.value = num1Button.textContent;

// }); 
// num2Button.addEventListener('click', () =>{
//     input1.value = num2Button.textContent;
// }); 

// input1.value = number;

// console.log(input1, input2, answer);

// console.log(add());

// console.log(mathSymble.value);

 



calButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    
    // console.log(mathSymble.value);
    
    
    if (mathSymble.value === 'add'){
      
        const results = add(value1, value2);
        // console.log(results);
        answer.textContent = results;

    } else if (mathSymble.value === 'sub') {

        const results = sub(value1, value2);
        answer.textContent = results;

    } else if (mathSymble.value === 'mult'){

        const results = mult(value1, value2);
        answer.textContent = results;
    } else if (mathSymble.value === 'div'){

        const results = divison(value1, value2);
        answer.textContent = results; 
    } else if (mathSymble.value === 'modulo'){

        const results = modulo(value1, value2);
        answer.textContent = results; 
    } else if (mathSymble.value === 'pythagorean'){

        const results = pythagorean(value1, value2);
        answer.textContent = results; 
    }});
