/*
	* Arrow Function
	* 
 */

// function Person(){
// 	var self = this;
// 	self.age = 0;

// 	setInterval(function(){
// 		self.age++;
// 		console.log(self.age);
// 	}, 1000);
// };
// 

function Person(){
	this.idade = 0;

	setInterval(()=>{
		this.idade++;
		console.log(this.idade);
	}, 1000);
}


var p = new Person();