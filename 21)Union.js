function FindUnion(arr1,arr2,j,res){
    if(j==arr1.length){
        return res
    }
    if(checkExists(arr2,arr2.length-1,arr1[j])){
        res.push(arr1[j])
    }
   
       return FindUnion(arr1,arr2,j+1,res)
    
}
function checkExists(arr2,j,el){
    if(j==0){
        return false
    }
    if(arr2[j]==el){
        return true
    }
    else{
        return checkExists(arr2,j-1,el)
    }
}
let a= FindUnion([1,5,3,6,8,7],[1,3,5,6],0,[])
console.log(a)
