// var student = {
//     id:110,
//     name:"Faisal Osman",
//     class:9,
//     marks:98
// }
// console.log(student)
// console.log(student.name)
// student.name="Ani"
// console.log(student["name"])
// console.log(student)
var shoppingCart={
    book:10,
    sunglass:10,
    keyboard:2,
    mouse:1,
    pen:25
}
var penCount=shoppingCart.pen;
console.log(penCount)
// alternative way
var penCount2=shoppingCart['pen']
console.log(penCount2)
// Getting all the keys of an object and return as an array
var properties=Object.keys(shoppingCart);
console.log(properties)
// Getting all the values of an object and return as an array
var values=Object.values(shoppingCart)
console.log(values)
// Another way to access value from an object and its dynamic way
var propertyName='mouse'
var propertyValue=shoppingCart[propertyName]
console.log(propertyName,propertyValue)
console.log(shoppingCart)
// Set properties value
shoppingCart.mouse=15;
console.log(shoppingCart)
shoppingCart['mouse']=10;
console.log(shoppingCart)
propertyName='mouse'
shoppingCart[propertyName]=5
console.log(shoppingCart)