//the constructor is a aspecial child. need to specify specific info in specific order
console.log("Flower class loaded")

class Flower {
    constructor(productId, productName, productDescription, productImage, productPrice, quantity) {
        this.productId = productId;
        this.productImage = productImage;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.quantity = null;
    }
    
    // when you create a function inside a class, it is called a 'method' therefore, you dont need to put 'function' before 'createProductString'
    createProductString() {
       // return "<tr><td><img src=" + this.productImage + "></td><td>" + this.productName + "</td><td>" + this.productDescription + "</td><td>" + this.productPrice + "</td><td><div class=\"formDiv\"><span>Quantity:</span><input type=\"number\" min=\"0.00\" id=\"quantity\"></div></td><td><button data-id=" + this.productId + "onclick=addToCartClick(event)>Add to Cart</button></td></tr>"

    return `<tr><td><img src="${this.productImage}"></td><td>${this.productName}
    </td><td>${this.productDescription}</td><td>${this.productPrice}</td><td><div class="formDiv"><span>Quantity:</span>
    <input type="number" min="0.00" id="quantity">
    </div></td><td><button data-id="${this.productId}" onclick="addToCartClick(event)">Add to Cart</button></td></tr>`
    }

 createLineItemString() {
    return `<tr><td><img src="${this.productImage}"></td><td>${this.productName}
    </td><td>${this.productDescription}</td><td>"Total Price"
    </td><td><button data-id="${this.productId}" onclick="checkout.html'">Place Order</button></td></tr>`
 }
}



    
