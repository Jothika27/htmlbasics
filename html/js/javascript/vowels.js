let str=prompt("Enter the String");
const count=str.match(/[aeiou]/gi);
console.log(count);
if(count!=null)
    alert(count.length);
else
   alert("There is No vowels");

let vow=["a","e","i","o","u"];
let count1=0;
for(let i of str.toLowerCase()){
    if(vow.includes(i))
     count1++;
}
alert(count1);

