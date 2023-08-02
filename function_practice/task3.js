function make_avg(arr,len){
    let sum=0;
    for(let i=0;i<len;i++){
        sum+=arr[i]
    }
   let avg=sum/len;
   return avg;

}
arr=[10,20,30]
console.log(make_avg(arr,arr.length))