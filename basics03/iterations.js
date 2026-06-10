//for 
let array=[1,2,5,68,5,3]
for(let index=0;index < array.length;index++){
    const element = array[index]; 
    if(element==5){
        console.log("best");
        
    }
    console.log(element);
    

}


for(let i=0;i<3;i++){
    console.log(`outer loop ${i}`);
    
    for(let j=0;j<10;j++){
        console.log(`inner loop ${j}`);
        
    }
}


//break and continue

for(let i=0;i<20;i++){

    if(i==5){
        console.log("detected");
        continue;
    }
    console.log(i);

    
}

//while and do while
let index=0;
while(index<10){
    console.log(index);
    index=index+2;
    
}
let score=11
do {
console.log(`score is ${score}`);
score++

} 
while(score<=10)

