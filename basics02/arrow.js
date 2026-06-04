const user={
    name:"hitesh",
    age:21,
    message:function(){
        console.log(`${this.name} , welcome`);
        console.log(this);
        
        
    }

}

console.log(this);  //global object in browser is window 

// function chai(){
//     let name="khushi"
//     console.log(this.name);  //cant use this in functions
    
// }

// chai()

const chai = () => {
    let name="khushi"
    console.log(this);
    
}
chai()
//arrow function
const add=(num1,num2) =>{
    return num1+num2
}
//implicit return 
const add=(num1,num2) => (num1+num2)  //no need to write return--write output in ()
