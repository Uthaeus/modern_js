
// combining arrays
let shoppingCart = [345, 375, 765, 123];

let newItems = [98, 123];

shoppingCart.push(newItems);
console.log(shoppingCart);
  // => [345, 375, 765, 123, [98, 123]]

shoppingCart.push(...newItems);
console.log(shoppingCart);
  // => [345, 375, 765, 123, 98, 123]

// copying arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart;
updatedCart.push(5);
console.log(updatedCart);
  // => [345, 375, 765, 123, 5]
console.log(shoppingCart);
  // => [345, 375, 765, 123, 5]
  // changed the data for original variable

const shoppingCart = [345, 375, 765, 123];
const updatedCart = shoppingCart.slice();
updatedCart.push(5);
console.log(updatedCart);
  // => [345, 375, 765, 123, 5]
console.log(shoppingCart);
  // => [345, 375, 765, 123]

const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
  // => [345, 375, 765, 123, 5]
console.log(shoppingCart);
  // => [345, 375, 765, 123]

// with function arguments
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(orderTotals)); 
  // => NaN

console.log(Math.max(...orderTotals));
  // => 10

console.log(Math.max(1, 5, 1, 10, 2, 3));
  // => 10

// object deconstruction
const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gergerson'
}
console.log(starter);
  // => Verlander
console.log(closer);
  // => Giles
console.log(relievers);
  // => Object {
  //      relief_1: "Morton",
  //      relief_2: "Gregerson"
  //    }


