
function myname(){
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");

}
myname()

function add(number1,number2){ //parameters 
    console.log(number1 + number2);
    

}
add(3,4) //arguements

function add2(number1,number2){ //parameters 
    let ans=number1+number2;
    return ans //return k bad kuch kam ni hoga
    

}

const result=add2(4,5)

function mess(name ="sam"){ //default value  
    if(name===undefined) {
        return}
    return `${name} just logged in`
}
console.log(mess("khushi"));

//rest operator
function cal(...num1){
    return num1

}
cal(200,400,500)  //returns array of all values 

//object in function

const user={
    name:"raj"
}
function handleobj(obj){
    console.log(obj.name);
    

}
handleobj(user)
const arr=[200,200,20000]
function handlearr(arr){
    return arr[2];
}
console.log(handlearr(arr));
