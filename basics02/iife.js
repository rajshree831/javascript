//immediately invoked function expressions(iife)
//for global scope problem
(function chai(){             //named iife
    console.log(`hello`);
    

})();
 
( (name)=>{                          //un-named iife 
    console.log(`chin tapak dam dam ${name}`);
    
})("mahi");

