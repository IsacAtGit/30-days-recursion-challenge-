function armstrong1(num, power,i=0,res=0){
if(i>power){
console.log(res)
return
}
res += Math.pow(parseInt(num[i]),power)
i+=1
armstrong(num,power,i,res)
}
let num = 153
num = num.toString()
let power = num.length
armstrong1(num, power)

// method 2 

function armstrong(num, power, res = 0, original = num) {
if (num === 0) {
console.log(res);
return;
}
let digit = num % 10;
res += Math.pow(digit, power);
armstrong(Math.floor(num / 10), power, res, original);
}

let num = 153;
let power = Math.floor(Math.log10(num)) + 1; // Number of digits
armstrong(num, power);
