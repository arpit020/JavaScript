/*---------------------------------------------------*/
/*------------Trust issues with SetTimeout-----------*/
/*---------------------------------------------------*/

console.log("start")

setTimeout(function() {
  console.log("timeout");
} ,5000);

console.log("end");

let starDate = new Date().getTime();
let endDate = starDate;
while( endDate < starDate+10000){
  endDate =new Date().getTime();
}

console.log("while expires");

//Here timeout will be print after 10secs because seTimout will push function to memory heap and after 5 sec .it will be pushed to
// priority queue but event loop will check if call stack is empty or not but it's not as while loop will run till 10 secs.
//after its get over then event loop will push function to call stack and run it
//do not block main thread



/*---------------------------------------------------*/
/*-Higher-Order Functions ft. Functional Programming-*/
/*---------------------------------------------------*/

const radius= [2,4,6,8];

const area = function(radius){
  return 2*Math.PI*radius*radius;
}

const diameter = function(radius) {
  return 2*radius;
}


const caclulate = function(rad , logic) {
  const output = [];
  for(let index = 0 ; index < rad.length ; index++ ) {
    output.push(logic(rad[index]));
  }
  return output;
}

/* -------------- like map ----------------*/ 
var circleArea = caclulate(radius,area);
var circleDiameter = caclulate(radius,diameter);
console.log(circleArea);
console.log(circleDiameter);

Array.prototype.caclulate = function( logic ) {
  const output = [];
  for(let i = 0 ;i < this.length ;i++) {
    output.push(logic(this[i]));
  }
  return output;
}

console.log( radius.caclulate(diameter));

/*---------------------------------------------------*/
/*------------Map,Filter & Reduce--------------------*/
/*---------------------------------------------------*/

const arr = [2,3,4,5,6];


/*------------------- Map  --------------------------*/

const double = function(arg) {
  return 2*arg;
}

console.log( arr.map(double));

console.log(arr.map( function( arg) {
  return 2*arg;
}));

console.log( arr.map((arg)=>{
  return 2*arg;
}));

/*--------------------- Filter ----------------------------*/

//even values
console.log( arr.filter((x) => x%2 == 0 ));

console.log( arr.filter(function(arg) {
  return arg%2 == 0;
}))


/*---------------------reduce----------------------------*/
/* reduce work on arr and come out with single output
   like total sum or largest values or smallest value
   and acc is the starting value passed to function     */

   const users = [
    { firstName : "Arpit" , lastName : "Rathi" , age : 25},
    { firstName : "Kartik" , lastName : "Rathi" , age : 25},
    { firstName : "Abhishek" , lastName : "Rathi" , age : 24},
   ]

   //output : { 25:2,26:1}

   var ageRange = users.reduce((acc,value) =>{

    if( acc[value.age] ) {
      acc[value.age] = acc[value.age] +1;
    } else{
      acc[value.age] = 1;
    }
    return acc;
   }, {});

   console.log("AgeRange => " , ageRange);


   // sum
   var sum = arr.reduce( function ( acc , value) {
    acc = acc + value;
    return acc;
   } ,0 );

   console.log( "sum => " + sum);

   //largest Value

   var largest = arr.reduce((acc,value) =>{
    if(value > acc) {
      acc = value;
    }
    return acc;
   } , 0);

   console.log( "largest => " + largest);


   // ployphils of map , filter and reduce ??