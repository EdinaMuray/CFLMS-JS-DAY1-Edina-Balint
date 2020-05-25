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
var ar = exotic.replace(/[/]/g, " ");
document.write (ar);



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




/* Challange ex1*/

"Vienna is a nice city"

vienna = [
['Vienna', '0', '0', '0', '0'],
['8', 'is', '9', '4', '1'],
['7', '0', 'a', '27', '2'],
['7', '4', '28', 'nice', '2'],
['3', '10', '25','7', 'city']
];

console.log(vienna[0][0]);
console.log(vienna[1][1]);
console.log(vienna[2][2]);
console.log(vienna[3][3]);
console.log(vienna[4][4]);



/* ex2 */


/* Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$"properties $flow$down;$actions$flow$up". */


/* Variation 1 */


/* var str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
var x = str.split("$");
document.write(x);

*/


/* 

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

By default, the replace() method replaces only the first match:

To replace all matches, use a regular expression with a /g flag (global match):

*/






var str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";
var x = str.replace(/[$]/g, " " );
document.write(x);



/*
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
*/