/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Global `this` usage refers to window Object. (Global Object Binding)
* 2. Princible 2: The object preceding the `.` is referenced as `this`. (Implicit Binding)
* 3. Principel 3: Using a constructor, the object that is returned is refered to `this`. (New Binding)
* 4. When using call, `this` is explicitly defined. (Explicit Binding)
*
* write out a code example of each explanation above
*/

// Principle 1
function globalScope () { console.log(this) }; globalScope();
// code example for Window Binding

// Principle 2
const myObj = { name: 'Dajuan', age: 35, gender: 'Male', greeting: function(name){ console.log(`Hi ${name}, are you
older than ${this.age}? Are you a ${this.gender}?`)} }; myObj.greeting('Team Lead');
// code example for Implicit Binding

// Principle 3
function RomanNumeral(numeral) {
  this.X = 10,
  this.M = 1000,
  this.V = 5,
  this.L = 50,

  this.value = function(){console.log(this)}
}
const I = new RomanNumeral(1);
const D = new RomanNumeral(10);
// code example for New Binding

// Principle 4
I.value.apply(D)
// code example for Explicit Binding
