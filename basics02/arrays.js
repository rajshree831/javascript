const arr=[0,1,2,30,4,5] //array is an object and resizable and can contain diff datatypes
console.log(arr[4]);
const color=["pink","yellow"]
const newarr=new Array(1,2,3,4)
//array methods

arr.push(300)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(40) // add element at start of array
console.log(arr);
arr.shift() //remove from start 
console.log(arr);

console.log(arr.includes(30));
console.log(arr.indexOf(30));
const array=arr.join() //converts array into string
console.log(array);

console.log("A",arr);
const myn1=arr.slice(1,3)

console.log(myn1);
console.log("B",arr);
const myn2=arr.splice(1,3)
console.log(myn2);
console.log("C",arr);

