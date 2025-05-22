function LinearSearch(arr,i,j){
    if(j==arr.length-1){
        return false
    }
    if(arr[j]==i){
        return j+1
    }
    else{
       return LinearSearch(arr,i,j+1)
    }
}
let a= LinearSearch([1,5,3,6,8,3,9,7],9,0)
console.log(a)
