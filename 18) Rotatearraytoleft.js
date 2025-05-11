function leftrotateplaceNtimes(arr,index,n,newarr,vr){
if(index==-1){
return newarr
}

if(index>n-1){
     newarr.unshift(arr[index])

}
else{
   newarr.push(arr[vr])
   vr=vr+1
}
return leftrotateplaceNtimes(arr,index-1, n,newarr,vr)

}
console.log(leftrotateplaceNtimes([2,4,6,6,9,10],[2,4,6,6,9,10].length-1,2,[],0))
