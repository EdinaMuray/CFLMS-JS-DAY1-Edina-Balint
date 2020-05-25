console.log ("Hi my name is Balint");

var age = 25;

console.log ("and I am " + age + " years old");

var playerNames = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];

console.log ("The most valuable player of the match is " + playerNames [2]);

/* Intermediate*/

var auto = [ "Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(auto.sort());

/*Intermediate 2*/

var fruit = [ "apple", "banana", "kiwi"];
fruit.splice(3,0,"orange");
console.log(fruit);


/* var fruit = [ "apple", "banana", "kiwi" , "orange"]; */

console.log(fruit.pop());
console.log(fruit);


var animal = ["monkey", "horse", "dog" ];
console.log(animal.sort());



animal.unshift("cat");
console.log(animal);



var exotic = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = exotic.split('/');
document.write (temp);



/*
var b = 'I am a JavaScript developer.';
var temp = new Array();
temp = b.split(' ');
console.log(temp);

*/

