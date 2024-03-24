/*********************************************/
/************Call Back Hell*******************/
/*********************************************/

const cart = ["shoes","pants","kurt"];

//supose we need to go through 3 process
//1. create Order 2.Paymnet 3.Order summary 4.update Wallet
//all of them are dependant to their parent 

api.createOrder(cart , function () {
    api.proceedToPayment(function() {
        api.orderSummary(function() {
            api.updateWallet();
        })
    })
})

// this pyramid is callback hell 

//update code with promises
createOrder(cart)
    .then( function(orderId){
        return proceedToPayment(orderId);
    }).then( function(orderDetails){
        return orderSummary(orderDetails);
    }).then( function(walletInfo) {
        updateWallet(wallet);
    })


/* to remove call back hell we can use promise
promise gives the flexibilty to run another method once first one is complete 
*/

// now : promise : {}
const promise = api.createOrder();

// after api call : promise :{ products : ['shoes','pants']}

promise.then( function(data) { // now we can pass this data to next function ( we will have control on our code)
    console.log(data)
})


const GITHUB = "https://api.github.com/users/arpit020";
const user = fetch(GITHUB);
console.log(user);

user.then((data) =>{
    console.log(data.json());
})




