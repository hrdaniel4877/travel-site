var $ = require ('jquery');
Person = require ('./modules/Person');


alert('ABC');


var john = new Person ('John', 'Blue');
john.greet();

var jane = new Person ('Jane', 'Red');
jane.greet();

$('h1').remove();