var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea = function(l,w){
    return l * w;
}
var name = "Raffie Garde";

console.log('Age: ' + age);
console.log('Pi: ' +pi.toFixed(2));
console.log('Date: ' + date);
console.log('Name: ' +name);
console.log('ComputeArea: ' + computeArea(10,60));


var x = 1;
var y = null;
var waladihah=undefined;

if(x)
console.log('x is TRUE');

if(!y)
console.log('y is FALSE');

if(!waladihah)
console.log('waladihah is UNDEFINED');




//=======JSON JavaScript Object Notation;

var jsonObject = {
    name: 'Raffie',
    lastname: 'Garde',
    address: 'Anda'
}
console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);