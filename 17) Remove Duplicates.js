function removeDuplicates(arr,index,obj){
if(index==arr.length-1){
return obj
}

if(obj.hasOwnProperty(arr[index])){
    obj[arr[index]] = obj[arr[index]] + 1

}
else{
     obj[arr[index]] = 1;
}
return removeDuplicates(arr,index+1, obj)

}
console.log(Object.keys(removeDuplicates([2,4,6,6,9,10],0,{})))
