function gcd(n1,n2){
if(n1<=0){
    return n2
}
if (n2<=0){
    return n1
}
let val = n1 - n2
if(n1>n2){
    return gcd(val,n2)
}
else{
    return gcd(n1,val)
}
}
console.log(gcd(20,15))
