
//function Declaration
function fullName(fName, lName) {
  console.log(`${fName} ${lName}`);
}
fullName('Kristine', 'Hudgens')
  // => Kristine Hudgens

//function Expression
fullName = function(fName, lName) {
  console.log(`${fName} ${lName}`);
}
fullName('Kristine', 'Hudgens')
  // => Kristine Hudgens

// with arrow functions

// no arguments
helloWorld = () => { console.log("Hi there"); }
helloWorld();
  // => Hi there

// single argument - does not need parens
firstName = fName => {
  console.log(fName.toUpperCase());
}
firstName('Kristine');
  // => KRISTINE

// multiple arguments
fullName = (fName, lName) => {
  console.log(`${fName} ${lName}`);
}
fullName('Kristine', 'Hudgens');
  // => Kristine Hudgens