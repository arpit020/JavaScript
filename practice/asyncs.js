/******************************************************/
/************************Async Await ******************/
/******************************************************/



//always return promise
async function getAsyncData(){
    return "hellow world";
}

//return with promise
async function getPromiseData() {
    const promise = new Promise(function(resolve,reject) {
        resolve("Returned using promise object");
    })

    return promise;
}


const asyncData = getAsyncData();
const promiseData = getPromiseData();

console.log(asyncData);
console.log(promiseData);

asyncData.then( response => console.log(response))
promiseData.then( response =>console.log(response));


// async await is used to handle promise

const p = new Promise((resolve,reject) =>{ 
    setTimeout(() => {
        resolve("Handling the promise");
    },10000);
    
});


// 1. method: we use then to handle promise
function handlePromise(){

    //JS will not wait for anyone : output => completed /n Handling the promise
    p.then( res => console.log(res));
    console.log("completed")


}

handlePromise();

//2. method : we use async await to handle promie

async function handleAsyncPromise(){
    console.log("Started");

    //JS Engine waiting for promise to completed : output => after 10s ( output will be written )
    const val = await p; //await is used only inside the async function
    console.log("Async 1st completed")
    console.log(val);


    //suppose we will have one more await
    const newVal = await p; //await is used only inside the async function
    console.log("Async 2nd completed")
    console.log(newVal);

    /* guess the output : as we are using same promise  JS will wait for 10s 
    both promise are running in parallel after 10s at same time..output will be return
    */


    /* Use cases 

    1. if we have two promise of different time and position as  p1 p2 and timetaken(p1)> timetaken(p2)
       then both promises output will be returned after timetaken(p1) 
    
    2. if we have two promise of different time and position as  p1 p2 and timetaken(p1)< timetaken(p2)
       then at timetaken(p1) output for p1 will be returned
       and  at timetaken(p2) output for p2 will be returned    
    */

    /* in simple words if uppaer promise taking more time then lower promise then lower promise have to wait till upper return values
       to make print statement
    */
}

handleAsyncPromise();


/* real example on GITHUB API */

const GITHUB = "https://api.github.com/users/arpit020";

async function fetchGITHB() {

    // error handling
    try {

        // real API call
        const data = await fetch(GITHUB);
        const json = await data.json();
        console.log(json);
    
    } catch( error ) {
        console.log(error);
    }
    

    // how fetch works
    // fetch() on resolve return  (response  promise) and convert that to json which is also a promise
    // fetch() => response.json() => jsonValue
    // fetch( GITHUB ) .then( response => response.json()) .then ( value => console.log(value));
}

fetchGITHB();


/* async await  vs promise.then / .catch */
/* both are good..async is new method -- try to use async */
/* async use promise behind the scenes */ 

