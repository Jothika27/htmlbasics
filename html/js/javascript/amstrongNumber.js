const num = promt("Enter the Number");

let dub = num;
let sum = 0, rem = 0;
while (dub > 0) {
    rem = dub % 10;
    sum = sum + (rem * rem * rem);
    dub = parseInt(dub / 10);
}
if (sum == num)
    alert("Amstrong Number");
else
    alert(" Not Amstrong Number");