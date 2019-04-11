

//const productIdUI = document.getElementById('productId')
//const productQuantityUI = document.getElementById('quantity')
//const usernameUI = document.getElementById('username') 
//const dateAddedUI = document.getElementById('dateAdded')
//const cartBtnUI = document.getElementById('cart-btn')
//const imageUI = document.getElementById('image')

// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it

function addToCartClick(event) {
        var productId = event.target.dataset.id
        console.log(productId)
    
        const parent = event.target.parentElement.parentElement;
        const quantity = parent.querySelector('.quantity')
        console.log(parent)
        console.log(this.quantity.value)

        console.log('clicked')
}

/*const addToCart = (id, quant) => {
    console.log(`${id}has been added ${quant} times`); 
    if(!findProductById(cart, id)) {
        cart.push ({...findProductById(flowers, id), quantity: quant})
} else {
        findProductById(cart, id).quantity += quant
}
saveCart()
}
const loadCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const getCart = () => {
            return cart
    }
const calculateTotal = () => {
        let total = 0

        cart.forEach(item) => {
            total += item.price * item.quantity
        })
        return total
    
}*/



var tbody = document.getElementById('cartCatalog');

completeLineItemString = ""


for (i=0; i < items.length; i++) {
    for(j=0; j < flowers.length; j++) {
        if(items[i].productId == flowers[j].productId) {
            flowers[j].quantity=items[i].quantity
            lineItemString += flowers[j].createLineItem()
        }
    }
   completeProductString += flowers[i].createLineItemString()
}

//console.log(completeProductString)
tbody.innerHTML = completeLineItemtString


    /* if(addToCartClick) {
        productId = productIdUI.value
        var productQuantity = productQuantityUI.value
        var username = usernameUI.value
        var dateAdded = dateAddedUI.value
        var image = imageUI.value

        //for(let i = 0; i < users.length; i++) {
            //if(usernameUI.value === users[i].username) {
                // Update the span to let the user know that he has to choose a different username
                //return false

        // To store the user I add him to the array of users (DB)
        cart.push(new Cart(productId, productQuantity, username, dateAdded, image));
        
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart)
        alert("now added to cart")
        

        //redirect user to login page
        //window.location.assign('./login.html')
    }
} */

