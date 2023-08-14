const merge=(arr)=>{
    
    if (arr.length>1){
const mid=Math.floor(arr.length/2);
const l=arr.slice(0,mid)
const r=arr.slice(mid,)
merge(l);
merge(r);
let i=0,j=0,k=0;

while(i<l.length && j<r.length){
    
    if(l[i]<r[j]){
        arr[k]=l[i];
        i++;

    }
   else
   {
    arr[k]=r[j];
    j++;
}

    k++;
  console.log(l,r,i,j,k)  
    
}
while(i<l.length){
    arr[k]=l[i];
    i++;
    k++
}
while(j<r.length){
    arr[k]=r[j];
    j++;
    k++
}
}
return arr;

}
    

console.log(merge([5,3,1,7]));