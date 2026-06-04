let date= new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);
let mydate=new Date(2005,1,2,5,3) //month start from zero 
console.log(mydate.toDateString());
let newdate=new Date("2023-01-15") //yyyy-mm-dd, we can also use dd-mm-yyyy

console.log(newdate);
let time=Date.now()
console.log(time); //time in ms 
console.log(Math.floor(Date.now()/1000)); //ms to seconds

console.log(date.getDay());

console.log(date.toLocaleString('default', {
    weekday:"long"
}))