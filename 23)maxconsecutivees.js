function findmaxconsecutive(arr1,j,res,cur){
    if(j==arr1.length){
        if (res<cur){
        res=cur
        cur=0
    }
        return res
    }
    if(arr1[j]==1){
        cur+=1
    }
    else if (res<cur){
        res=cur
        cur=0
    }
    else{
        cur=0
    }
    
   
       return findmaxconsecutive(arr1,j+1,res,cur)
    
}

let a= findmaxconsecutive([1, 1, 0, 1, 1, 10,1,1,1,1],0,0,0)
console.log(a)
