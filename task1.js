//prompt user to log in
let loggedIn = true

//test to see if logged in
//if true then display products
//display total price

if (loggedIn){
  
console.log('Items in cart');
const cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];
for(const carts in cart){
    console.log(cart[carts]);
}

// create an array
let total = [20, 100, 5, 200, 3, 35, 1];


let sum = 0;
for (let i = 0; i < total.length; i++ ) {
  sum += total[i];
}
console.log(`The total price of items in cart: $${sum}`);

}else{
    console.log("Please log in to view your cart")
}