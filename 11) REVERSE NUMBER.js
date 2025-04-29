function reversenumber(n,reverse=0){
if(n<=0){
console.log("must be greater than zero")
return
}


if(n<10){
     reverse = reverse*10 +n
     console.log(reverse)
     return
}

let remain = Math.floor(n/10)
let digit = Math.floor(n%10)
reverse = (reverse*10)+ digit
reversenumber(remain,reverse)



}

reversenumber(7089)
