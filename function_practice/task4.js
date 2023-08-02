// function odd_even(num){
//     if(num%2===0){
//         console.log("",num," is a even number")
//     }
//     else{
//         console.log("",num," is a odd number")
//     }

// }
// odd_even(10)
function odd_even(num){
    if(num%2===0){
        return  "even number"
    }
    else{
       return "odd number"
    }
   
}
num=200
res=odd_even(num)
console.log(num,"is a",res)