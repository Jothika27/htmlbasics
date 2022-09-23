let root1, root2;
//get the a,b,c value from user 
let a = prompt('Enter the co-efficient of x^2');
let b = prompt('Enter the co-efficient of x');
let c = prompt('Enter the constant');

//formula to calculate discriminant
let discriminant = (b * b) - (4 * a * c);
console.log(discriminant);

//calculate root1,root2 based on the discriminant 
if (discriminant > 0) {                                  //discriminant>0
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
}
else if (discriminant == 0) {                           //discriminant==0
    root1 = root2 = -b / (2 * a);
}
else {
    let realPart = (-b / (2 * a));                      //discriminant<0
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
}

//print the root values 
console.log(`the roots of the equation are ${root1} and ${root2}`);
alert('root1 = ' + root1);
alert('root2 = ' + root2);