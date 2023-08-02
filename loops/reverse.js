// var i=10;
// while(i>=1){
//     console.log(i)
//     i--;
// }
// for(var i=10;i>=1;i--){
//     console.log(i)
// }
// var count=0;
// for(var i=1;i<=39;i++){
//     console.log("mon vlo nai");
//     count++;
// }
// console.log(count)
// for(var i=58;i<=98;i++){
//     console.log(i)
// }
// for(var i=581;i<=623;i=i+2){
//     console.log(i)
// }
// var arr=[1,2,3,4,5];
// var i=0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++;
// }
// for(var i=30;i<86;i++){
//     if(i>44){
//         break;
//     }
//     console.log(i)
// }
var arr2=[20,50,100,150,120,200,210,220,40,32,112,450]
for(var i=0;i<arr2.length;i++){
    if(arr2[i]>200){
        continue;
    }
    console.log(arr2[i])
}