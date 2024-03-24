/************************************************/
/******************Promise API*******************/
/********************************************** */

const p1 =new Promise( function(resolve,reject) {
    setTimeout( () => { resolve("p1 is successful")},5000);
    //setTimeout( () => { reject("p1 is failded.")},5000);
})

const p2 =new Promise( function(resolve,reject) {
    setTimeout( () => { resolve("p2 is successful")},5000);
    //setTimeout( () => { reject("p2 is failded.")},1000);
})

const p3 =new Promise( function(resolve,reject) {
    setTimeout( () => { resolve("p3 is successful")},3000);
    //setTimeout( () => { reject("p3 is failded.")},5000);
})

 //  if all sucess then response : array[res1,res2,res3]
 //  if any one of them fail then at same time : error ( do not wait for furthur promises)
 Promise.all([p1,p2,p3]).then((response) =>{
     console.log(response);
 })

 //  if all sucess then response : array[res1,res2,res3]
 //  if any one of them fail then wait for other to settle response : array[res1,err2,res3];
 Promise.allSettled([p1,p2,p3]).then((response) =>{
     console.log(response);
 })

 //  if all success then wait for first one to success and gives response : res2 ( first one to give output)
 //  if faster one fails then gives error as response : err2
 Promise.race([p1,p2,p3]).then((response) =>{
     console.log(response);
 })

 //  if all success then wait for first one to success and gives response : res2 ( first one to give output) 
 //  if any one them fail then gives output for first one as a sucess : res1
 //  if all fails then gives aggregate error : [err1,err2,err3]
 Promise.any([p1,p2,p3]).then((response) =>{
     console.log(response);
})
