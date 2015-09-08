/*
	Class
*/

class Person {
    constructor(options) {
        this.name = options.name
        this.email = options.email
    }
    save(){
    	console.log(this.name, this.email)
    }
}

var options = {
	name:'Youry',
	email:'youry.stancatte@gmail.com'
};

var p = new Person(options);
console.log(p);