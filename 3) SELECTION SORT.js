function selectionSort(arr,p,ci){
    if(p>arr.length){
        return arr
    }
    if(ci>arr.length-1){
        return selectionSort(arr,p+1,0)
    }
    if(arr[p]<arr[ci]){
        let temp = arr[ci]
        arr[ci]= arr[p]
        arr[p]= temp
    }
    return selectionSort(arr,p,ci+1)
}
let a = selectionSort([5,2,9,7,4],0,1)
console.log(a)