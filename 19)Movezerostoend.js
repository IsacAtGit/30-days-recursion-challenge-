function moveZerostoEnd(arr,times,index){
    if(times==-1){
        return arr
    }
    
    if(arr[index]==0){
        arr.splice(index,1)
        arr.push(0)
        return moveZerostoEnd(arr,times-1,index)
    }
    else{
       return moveZerostoEnd(arr,times-1,index+1)
    }
    
}
arr = [0, 1, 0, 2]

console.log(moveZerostoEnd(arr,arr.length-1,0))
