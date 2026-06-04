// singleton- constructor

//object literals
const sym=Symbol('123')
const Jsuser ={
    name:"rajshree",
    age:21,
    location:"indore",
    [sym]:"mykey1" // using symbol

}
console.log(Jsuser.name)
console.log(Jsuser["name"])

Jsuser.name="khushi"
console.log(Jsuser.name)
// Object.freeze(Jsuser) // values cant be changed now

Jsuser.greeting=function(){
    console.log(`hello, ${this.name}`)
}
console.log(Jsuser.greeting())





