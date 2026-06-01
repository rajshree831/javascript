const name="khushi"
const count=50
console.log(name+count);
console.log(`hello my name is ${name} and my count is ${count}`); //string interpolation
const game=new String("candy") //has many methods 
console.log(game);
console.log(game[0]); 
console.log(name.length);
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('i'))
const other=name.substring(0,4) //accept negative value but still strt from 0
console.log(other)
const also=name.slice(-5,5) //also take negative values which means from backwards
console.log(also)

const new1="        jcdjksdn   "
console.log(new1)
console.log(new1.trim()) // remove strt and end spaces
console.log(name.replace('k','r'))
console.log(name.includes("shi"))
console.log(name.split('h'))

