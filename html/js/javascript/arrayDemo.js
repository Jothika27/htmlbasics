let daily_activities=['brush','eat','work','sleep'];
let new_routine=['exercise'];

//sorting
daily_activities.sort();
console.log(daily_activities);

//find the index
console.log('index of brush is '+daily_activities.indexOf('brush'));

//concat 2 arrays
console.log(daily_activities.concat(new_routine));

//slice after 2nd index
console.log(daily_activities.slice(2));

//to reverse a array
console.log(daily_activities.reverse());

//push a new element
let push1=daily_activities.push('learn');
console.log(push1);
console.log(daily_activities);

//unshift
let unshift1=daily_activities.unshift('cook');
console.log(unshift1);
console.log(daily_activities);

//shift
let firstElement=daily_activities.shift();
let lastElement=daily_activities.pop();

console.log(daily_activities);
