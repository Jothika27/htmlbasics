const breath=prompt('Enter the breath');
const length=prompt('Enter the length');

//calculate Area
const areaValue=(breath*length)/2;
console.log(`Area of Traiangle is ${areaValue}`);

let firstNumber=prompt('Enter the first No');
let secondNumber=prompt('Enter the Second No');
let temp;

console.log('before Swap '+firstNumber+' '+secondNumber);

//swaping
temp=firstNumber;
firstNumber=secondNumber;
secondNumber=temp;

console.log('After Swap '+firstNumber+' '+secondNumber);

//without third variable
let a=5;
let b=6;

a=a+b;
b=a-b;
a=a-b;

console.log(a+' '+b);
