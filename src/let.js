/*
	let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. 
	
	Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, 
	independentemente do escopo de bloco.

 */

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a);  // 4x'
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1