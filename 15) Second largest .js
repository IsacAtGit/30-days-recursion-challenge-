function secondLargest(arr,i,max,sec){
    if(arr.length-1 == i){
        return sec
    }
    if(arr[i]>max ){
        sec=max
        max = arr[i] 
    }
    
    if(arr[i]<max && arr[i]>sec){
        sec= arr[i]
    }
   
     return secondLargest(arr,i+1,max,sec)
    
}
console.log(secondLargest([1,3,6,2,8,4],0,1,0))
