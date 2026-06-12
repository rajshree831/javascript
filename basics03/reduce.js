const arr=[1,2,3,4,5,6,7,8,9]

// const newarr =arr.map((num)=> num+10)

// console.log(newarr);

//chaining --kitni bhi kr skte h 

const newarr=arr.map((num)=> num*10).map((num)=>num/10)
console.log(newarr);

//reduce 


const initial=0
const sumwithinitial=arr.reduce((acc,currval)=> {
    return acc+currval
},initial)

console.log(sumwithinitial);


