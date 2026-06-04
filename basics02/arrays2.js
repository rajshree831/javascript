const heroes=["thor","iron","spider"]
const heroes2=["thor","iron","spider"]
// heroes.push(heroes2) //adds the whole array as an single element 
// console.log(heroes);
// console.log(heroes[3][2]); 
const all=heroes.concat(heroes2) //combine both array into one new array
console.log(all);

const all1=[...heroes,...heroes2] //mainly used to cobine more than two arrays

console.log(all);

const another=[1,2,3,[4,5,6],[6,7,[8,9]]]
const another1=another.flat(Infinity) //converts array without any subarray in it sab ek element h
console.log(another1);

Array.isArray("khushi") //checks 
console.log(Array.from("rajshree")); //converts into array
console.log(Array.from({name:"pk"})); //revisit
console.log(Array.of(score1,score2,score3)); //makes array 


