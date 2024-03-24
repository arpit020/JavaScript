/* can ignore this => shifted to basics.js */


/*------------------------------------------------------*/
/*-------------CALL Back Function in JS 🔥--------------*/
/*------------------------------------------------------*/


//What is callBack Function in JS -- FUnction that is passed as a variable is callBack Function 

setTimeout(function(){
  console.log("timeout : " + "timer")
},5000);

function callA(y){
  console.log("A");
  y(); 
}

callA(function(){
  console.log("B")
})

//event listener -- if we have lot of listener then it will consume a lot of memory as listener have clouser

function addListener() {
  var count = 0;
  document.getElementById("myButton").addEventListener("click",function(){
    console.log(++count);
  })
  
  removeEventListener();
}

addListener();

//garbage collection and remove event listeners
function removeEventListener() {
  document.getElementById("myButton").removeEventListener("click",function(){
    console.log(++count);
  })
}





/*------------------------------------------------------*/
/*---------------FIRST CLASS FUNCTIONS 🔥---------------*/
/*------------------------------------------------------*/

//Function Statement aka Function Declaration

function funA(){
  console.log("A is called");
}

//Function Expression

var funB = function() {
  console.log("B is called");
}

funA();
funB();

//Anonymous Function ( function without name)

// function() {  //cannot defined in global scope as function need to have a name

// }

//Named Function Expression

var funC = function Named() {
  console.log("C is called");
}

//Difference between parameter and arguments

var funD = function callMe( argument)  {
  console.log("Please call : " + argument);
}

funD("Arpit") // "arpit" is parameter 

//First Class Function -- ABility of function to pass as a argument and return as a argument from function

function firstClass(){
  console.log("first Class")
}
var funE = function( value ){
  console.log(value);
}

funE( firstClass);



/*------------------------------------------------------*/
/*--------------------Clouser and object----------------*/
/*------------------------------------------------------*/


function gar() {
  var x=0,z=10;
  return function() {
    console.log(x);
  }
}

var obj = gar();
obj();


function Counter() {
  var count = 0;

  this.incrementCounter = function() {
    count++;
    console.log("count => ", count);
  }

  this.decrementCounter = function() {
    count--;
    console.log("count => ",count);
  }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.incrementCounter();



/*------------------------------------------------------*/
/*-----------setTimeout + Closures Interview Question---*/
/*------------------------------------------------------*/
var x = 200;
function timeout() {

  for(var i = 1 ; i<= 5;i++) {
    setTimeout( function() {
      console.log( "timeout : " + i);
    } , i*1000);
  }
}

timeout(); // console : 6 6 6 6 6 ( because function() will have its scope + lexical scope while on timeout and 
                                  //  reference to i will be updated to 6 in end)

function letTimeout() {

  for(let i = 1 ; i<= 5;i++) {
    setTimeout( function() {
      console.log("timeout : " + i);
    } , i*1000);
  }
}

letTimeout(); // console : 1 2 3 4 5 ( because let will seperate bloack for each call)

function finalTimeout() {

  for(var i = 1 ; i<= 5;i++) {
    function call(x) {
      setTimeout( function() {
        console.log("timeout : " + x);
      } , i*1000);
    }

    call(i);
  }
}

finalTimeout() // console : 1 2 3 4 5 ( because function() will make a clouser with call function )







/*---------------------------------------------------------*/
/*------------------Closures in JS 🔥----------------------*/
/*---------------------------------------------------------*/

function clouser() {
  var x = 1;
  function inside(){ //this function will have access to clouser function EC i.e inside() lexicial environment
    console.log(x);
  }
  inside();
}

clouser() // output : 1  ( this is clouse : function with its lexicial environment is clouser )


var myCount = 20;
function  newClouser() {
  var newCount = 15;

  function get(){
    console.log("myCount" + myCount);
    console.log("newCount" + newCount);
  }

  return get;
}

var newFun = newClouser();
newFun(); // it will print value of newCount because get function is returned with its lexicial environment


function first(){
  var st = 1;
  function second() {
    var sec = 2;
    function third() {
      console.log(st,sec);
    }
    third();
  }
  second();
}

first() // output : 1,2








/*--------------------------------------------------------*/
/*-------------BLOCK SCOPE & Shadowing in JS 🔥-----------*/
/*--------------------------------------------------------*/

var blockA = 50;
if(true){
  var blockA =10; //defined in Global Scope
  let blockb=20; //defined in block scope
  const blockc =30; //defined in block scope

  console.log(blockA);
  console.log(blockb);
  console.log(blockc);
}

console.log(blockA); 10;
//console.log(blockb); //ReferenceError: blockb is not defined
//console.log(blockc); //ReferenceError: blockC is not defined

function updateblockA() {
  var blockA = 100;
}

function updateblockB() {
   blockA = 200;
}

updateblockA();
console.log(blockA);

updateblockB();
console.log(blockA);

var myName = "Arpit";
let secondName = "Rathi";

{
  let myName = "Rathi";
  let secondName = "Arpit";
  console.log(secondName);
}

console.log(myName);
console.log(secondName);


/*---------------------------------------------------------*/
/*--------------let & const in JS 🔥Temporal Dead Zone-----*/
/*---------------------------------------------------------*/

//console.log(letA) // Reference Error : Cannot access 'letA' before initialization
let letA;
letA = 10;

console.log(letA) //output : 10;

//let letA =20; //SyntaxError: Identifier 'letA' has already been declared

//const consA; // SyntaxError :Missing initializer in const declaration

const consA = 20; 
console.log(consA) // output : 20;




/*---------------------------------------------------------*/
/*-----The Scope Chain, 🔥Scope & Lexical Environment------*/
/*---------------------------------------------------------*/

function a_x() {
  console.log(lConstant); // output : 10 because its in ecexution context of a_x() parent
}

var lConstant =10;
a_x();


function a_y(){
  var a_b =20;
  console.log(a_b);
}
a_y();
//console.log(a_b); // output : error because a_b is not defined in Global execution context . EC of a_y() is deletd on completion of 
                  // function call


function ax() {
  var b =10;
  cx();
  function cx() {
    var name = 20;
    console.log(b);
  }
}

ax();






/*----------------------------------------------------------*/
/*----------------Undefined and not defined in JS-----------*/
/*----------------------------------------------------------*/

console.log(un_Var); // this is undefined
if( un_Var === undefined ) {
  console.log("un_Var is not defined");
} else {
  console.log("un_Var is defined");
}

var un_Var = 10;
//console.log(myNum); // this is not defined






/*-------------------------------------------------------------*/
/* ---------------------- API Call in JS ----------------------*/
/*-------------------------------------------------------------*/

/* ----- add these along with method:'POST' to make post call 
headers: {
  'Content-Type': 'application/json' // Content-Type header for JSON data
},
body: JSON.stringify(postData) // Convert data to JSON format

*/


fetch('https://65e60da8d7f0758a76e8083a.mockapi.io/api/products', {
  method:'GET',
  
}).then( (response) =>{
  response = response.json();
  return response;
}).then( (data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})


/*-------------------------------------------------------------*/
/* ----------------- How Function works in JS -----------------*/
/*-------------------------------------------------------------*/


var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

c(5);

function c( count ) {
  if( count == 0 ) {
    console.log("-----End -----");
    return;
  }
  c(count-1);
}



/*------------------------------------------------------------*/
/*---------------------- Hoisting in JS-----------------------*/
/*------------------------------------------------------------*/


console.log(num);
var num = 2;
function findSquare(n) {
  var ans = n * n;
  return ans;
}

var sqr2 = findSquare(num);
var sqr4 = findSquare(4);

console.log(sqr2);
console.log(sqr4);

var myFun = function find() {
  console.log("hello arpit");
}
myFun();


