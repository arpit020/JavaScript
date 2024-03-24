/************************************************/
/********************Promise*********************/
/********************************************** */

const cart = ["Shoes","Kurta","Bag"];

const apiOut = createOrder(cart);
console.log(apiOut);

apiOut.then((cartIdDetails) =>{
    console.log(cartIdDetails);
    return cartIdDetails;
}). then( (IdDetails) =>{
    return makePayMent(IdDetails);
}).then((paymentStatus)=>{
    console.log(paymentStatus);
}).catch((error) =>{
    console.log(error);
}).then(()=>{
    console.log("I will execute no matter what happen above.If we have then after catch then it will always execute");
})

/* createOrder giving output in promise form and then we are consuming it
 but how will it return in promise type..now we will create promise */


 /* we use promise to handle asyn data */
 function createOrder(myCart) {

    //------ constructor to create promise object ( resolve and reject api are provided by js)
    const orderDetails = new Promise(function(resolve,reject){
        if( !validCart(myCart)) {
            const error = new Error(" Number of products are invalid");
            reject(error);
        } else{
            // some call to get details -- for now custom data
            const cartId = ["123456","78901"];
            if( cartId ) {

                // adding time out to make it wait ( in real time : api call is going on )
                setTimeout( () => {
                    resolve(cartId);
                } ,  5000 );
                
            }
        }
    });
    return orderDetails;
 }

 function validCart( cartDetail ) {
    if( cartDetail.length > 0 && cartDetail.length < 4) {
        return true;
    } else{
        return false;
    }
 }

 function makePayMent(IdDetails) {
    const paymentStatus = new Promise(function(response,reject) {
        response("Payment Successful");
    })
    return paymentStatus;
 }