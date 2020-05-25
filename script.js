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



/*var exotic = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var ar = exotic.split('/');
document.write (ar);

var temp = ar.split(', ');
document.write(temp);*/

/*var fruits = 'apple, orange, pear, banana, raspberry, peach';
var ar = fruits.split(', ');
console.log( ar );*/

/* Advanced exercises*/

var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

Number ("21");

Number ('36');

var c = Number ("21"); 

var d = Number ('36');

var z = a + b + c + d + e;
console.log(z);

/*2nd part*/

var f = '1';

var g = 15;

var h = 8;

var i = "1";

var f = Number ('1');

var i = Number ("1");

var m = f * g * h * i;

console.log(m);

var y = z / m;
document.write(y);

/* Advanced, ecx2.
Select and output the numbers 11, 25, 17, 27 and 0 in the console.
*/

matrix = [
['1', '2', '1', '24'],
['8', '11', '9', '4'],
['7', '0', '7', '27'],
['7', '4', '28', '14'],
['3', '10', '25','7'],
['21', '4', '6', '17'],
['3', '5', '26', '3']
];

console.log(matrix[1][1]); // 11 //
console.log(matrix[4][2]); // 25 //
console.log(matrix[5][3]); // 17 //
console.log(matrix[2][3]); // 27 //
console.log(matrix[2][1]); // 0 //


