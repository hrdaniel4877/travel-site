var $ = require ('jquery');

/* old ES5 synthax
Person = require ('./modules/Person');
*/

// new ES6 synthax
import Person from './modules/Person';

alert('ABC');

class Adult extends Person {
	payTaxes () {
		console.log(this.name + 'now owes $0 in taxes');
	}
}

var john = new Person ('John', 'Blue');
john.greet();

var jane = new Adult ('Jane', 'Orange');
jane.greet();
jane.payTaxes();

$('h1').remove();