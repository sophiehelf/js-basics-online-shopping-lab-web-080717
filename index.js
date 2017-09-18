var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 	var newObject = {};
 	newObject[item] = Math.floor((Math.random() * 100) + 1);
 	cart.push(newObject);
 	console.log(`${item} has been added to your cart.`);
 	return cart;
}

function viewCart() {
	var newArray = [];
	for (var i = 0; i < cart.length; i++) {
		var keyValuePair = cart[i];
		var item = Object.keys(keyValuePair)[0];
		var price = keyValuePair[item];
		newArray.push(`${item} at \$${price}`);
	}
	switch(cart.length) {
		case 0: 
			console.log("Your shopping cart is empty.")
			break;
		case 1:
			console.log(`In your cart, you have ${newArray[0]}.`)
			break;
		case 2: 
			console.log(`In your cart, you have ${newArray[0]} and ${newArray[1]}.`)
			break;	
		default: 
			var stringy = ""
        	for (var i=0; i < (newArray.length - 1); i++){
        		stringy += ` ${newArray[i]},`
       		}
       console.log(`In your cart, you have${stringy} and ${newArray.pop()}.`);
       debugger;
	}
}

function total() {
	var sum = 0;
	for (var i = 0; i < cart.length; i++) {
		var sliced = cart[i];
		var item = Object.keys(sliced)[0];
		sum += sliced[item];
	}
	return sum;
}

function removeFromCart(item) {
	for (let i=0; i < cart.length; i++ ){
	    var keyValue = cart[i];
	    var newItem = Object.keys(keyValue)[0];
    		if (newItem === item){
		        cart.splice(i,1);
		        return cart;
       }
   }
   console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
	if (cardNumber === undefined) {
		console.log("Sorry, we don't have a credit card on file for you.")
	} else {
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
	}
	cart = [];
	return cart;
}
