import { add } from './calculation.js'; 


const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');
const calButton = document.getElementById('calculate');
const answer = document.getElementById('answer');
const mathSymble = document.getElementById('math-fucntion')


console.log(input1, input2, answer);

console.log(add());

console.log(mathSymble.value);

 



calButton.addEventListener('click', () => {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    

    console.log(mathSymble.value);
    const results = add(value1, value2);

    

    console.log(results);
    return results;
    

});