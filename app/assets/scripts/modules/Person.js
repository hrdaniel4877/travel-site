// new ES6 synthax
class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.color = favColor;	
	}	
	greet() {
		console.log("Hi there, my name is " + this.name + " and my fav color is " + this.color + ".");
	};
};

export default Person;




/* old ES5 synthax
function Person (fullName, favColor) {
	this.name = fullName;
	this.color = favColor;
	this.greet = function() {
		console.log("Hello, my name is " + this.name + " and my fav color is " + this.color + ".");
	};
};

module.exports = Person;
*/