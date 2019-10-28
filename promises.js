let a = "test1"
let newFn =  new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("test4");
  }, 1000); 
})
  console.log(a);
  newFn.then((thenArg)=>{
  a = thenArg;
  console.log(a);
}).catch((thenArg) => {
  a = thenArg;
  console.log(a);
  
})





