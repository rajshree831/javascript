// const user=new Object()
// const user={}
// user.id=21;

const user={                             //can use object inside object as a value
    email:"ckkdckdnc",
    fullname:{
        userfull:{
            first:"raj",
            last:"shree"
        }
    }
}

console.log(user.fullname.userfull);

const obj1={1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3 =Object.assign({}, obj1,obj2) //used to combine objects

console.log(obj3);

const obj4={...obj1,...obj2} //also to combine
console.log(obj4);
const users=[{},{},{}]
console.log(Object.keys(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('email'));
