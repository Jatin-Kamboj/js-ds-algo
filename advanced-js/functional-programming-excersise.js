// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    activities: []
}
  
  
const item = {
    name: "T shirt",
    price: 200,
    tax: 3,
    totalCost: ""
}

function addUserActivity(user, type) {
    user.activities.push(type)
}

function addItemsToCart(item, user) {
    const itemWithTax = {
        ...item,
        totalCost: ((3 / 100) * 100) + item.price
    }
    user.cart.push(itemWithTax)
    addUserActivity(user, `Added ${item.name} to cart.`)
}

function completePurchase(user) {
    user.purchases = [...user.cart]
    console.log("Purchase completed ...");
    addUserActivity(user, `Completed the purchase..`)
}

function emptyCart(user) {
    user.cart.length = 0
    addUserActivity(user, `Cart is empty now..`)
}




  //Implement a cart feature:
  // 1. Add items to cart.
addItemsToCart(item, user)
completePurchase(user)
emptyCart(user)
console.log('user :>> ', user);
  // 2. Add 3% tax to item in cart
  // 3. Buy item: cart --> purchases
  // 4. Empty cart
  
  //Bonus:
  // accept refunds.
  // Track user history.