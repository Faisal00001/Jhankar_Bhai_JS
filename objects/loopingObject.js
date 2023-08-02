const student={
    id:1721064042,
    name:'Faisal Osman',
    age:25,
    university:'North South University'
}
var i;
const keys=Object.keys(student)
const values=Object.values(student)
for(i=0;i<Object.keys(student).length;i++){
    // console.log(keys[i],":",values[i])
    propertyName=keys[i]
    propertyValue=student[propertyName]
    console.log(propertyName,propertyValue)
}
// Using for in loop
for(val in student){
    console.log(val,student[val])
}