const email="rajshree.ai"

if(email){
    console.log();
    
}
else{  //in case of empty
    console.log();
    
}

// falsy values = false,0,-0 , 0n , "" , null, undefined, NaN
// truthy values = "0", 'false', " ",[] empty array, {} empty object , function(){}

//nullish coalescing operator (??) : null undefined 
let val1;
val1=null??10
console.log(val1);

val1=null??10??20 //first value will be assigned 

//terniary operator

// condition ? true : false 


