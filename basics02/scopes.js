// let a=300
// if(true){ //block scope
//      let a=10

// const b=20

// var c=30
// console.log(a)

// }

// //global scope
//  console.log(a);
// //console.log(b);
// console.log(c);

function one(){     //child can acess parent 
    const name="raj"
    function two(){
        const last="shree"
        console.log(name);
        
    }
    console.log(last); //cant access
    
}


