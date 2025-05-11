function sorted(arr,ci,ni){
if(ni==arr.length){
return true
}


if(arr[ci]<arr[ni]){
    return sorted(arr,ci+1,ni+1)
}
else{
    return false
}



}
console.log(sorted([2,4,6,9,10],0,1))
