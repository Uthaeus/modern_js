// working with 'this'

function Invoice() {
  this.taxRate = 0.06;
}

const inv = new Invoice();
console.log(inv.taxRate);
  // => 0.06

function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(function totalNumbers() {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();
  // => NaN

function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
  }, 2000);
}
const inv = new Invoice(200);
inv.total();
  // => 212

