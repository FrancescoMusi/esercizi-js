"use strict"; // the code works in the modern way

//alert sempplice
alert( 'alert scritto con js' );

 
//costanti 
const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // error, can't reassign the constant!


//il valore infinito 
alert( 1 / 0 ); // -> Infinity


//indicare un bigInt con n
const bigInt = 1234567890123456789012345678901234567890n;


//variabili in un testo 
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); 
// embed an expression
alert( `the result is ${1 + 2}` ); 


//messaggio che chiede si o no, if, while
let approved = confirm("Can i send you a message?");
let correct = false;
let phone;

if (approved) {
  while (!correct) {
    phone = prompt('Tell me your phone number', 0);
    correct = confirm(`Is ${phone} correct?`); 
  }

  alert( `Ok, i will text you!` ); 

} else {
  alert( `Oh, sorry :(` ); 
}


//stringe e conversioni
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

alert( "6" / "2" ); // 3, strings are converted to numbers


//contatori
let counter = 0;
alert( ++counter ); // 1 (prima lo incrementa poi lo usa)
alert( counter++ ); // 0 (prima lo usa poi lo incrementa)
