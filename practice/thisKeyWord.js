/******************************************************/
/******************** this keyWord ********************/
/******************************************************/

//"use strict";

// 1 : this in global space

console.log(this); //globalObject - window , global in node

/* Note : js can be run in window, node.js , watch etc. it runs in JS runtime environment
on different places it will have different global object . In window , it has window as a global object  */

// 2 : this inside function

function callMe(){

    //value depends on strict / non strict mode
    console.log(this);
}

callMe();

/* Note : this value inside a function is undefined but because of ( this substitution) in non strict mode
if the value of this keyword is undefined or null then this keyword will be replaced with the globalObject
only in non strict mode */

// 3 : value of this also depends on how the function is called

// in strict mode
callMe() ; // output : undefined
window.callMe() // output : window

// 4 : this inside a object's method

const object = {
    a : 10 , 
    b : function() {
        console.log(this);
        console.log(this.a);
    }
}

object.b();

/* Note : value of this inside a object is object itself 
          this.a will be value of object.a 
*/

 // 5 : call apply bind methods ( sharing methods) 
        
 /* Note : all these methods are used to override values for this  keyword*/

 const student = {
    name : "Arpit",
    getName : function() {
        console.log(this.name)
    }
 }

 student.getName();

 const newStudent = {
    name : "Kartik"
 }

 student.getName.call(newStudent);
 /* Note : if newStudent want to use getName of student object then he/she has to override this keyword and we use call to override this */


 // learn call apply bind from utube video


 // 6 : this inside arrow functions 

 /* Note : in arrow function : value of this is enclosing lexical context */

 const myObject = {
    a : 10,
    b : () =>{ console.log(this)},
    c : function() {
        console.log(this);
    },
    d : function() {
        const inside = () =>{
            console.log(this);
        } 
    }
 }

 myObject.b() // output : window ( because here lexical context is global object )
 myObject.c() //output : myObject
 myObject.d() //output : myObject ( because here lexical context of this is function context which is object )


 // 7 : this inside DOM element

 /* Note : the value is reference to HTMLElement  Example : index.html ( buttonTag)*/



