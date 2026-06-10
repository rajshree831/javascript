//for of

const arr=[1,2,3,4,56] 
for (const num of arr) {

    console.log(num);
    
    
}

const str="hello"
for (const h of str) {
    console.log(h);
    
    
}

//maps 

const map=new Map() //unique values and order maintained 
map.set('in',"india ")
map.set('usa',"america")

console.log(map);

for (const [key,value] of map) {
    console.log(key+ "-->" +value );
    
    
}
//for in

const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in obj) {
    console.log(obj[key]);
}

for (const i in arr) {
    console.log(arr[i]);
    
    
    
    
}


for (const key in map) { //not possible
    console.log(key);
    
    
    
}


//for each
arr.forEach( function (i){
    console.log(i);
    
}   )

arr.forEach(i => {
    console.log(i);
    
    
});

function print(i){
    console.log(i);
    
}

arr.forEach(print);