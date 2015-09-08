/*
	let
*/

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a);  // 4x'
  console.log(b);  // 1
} 
