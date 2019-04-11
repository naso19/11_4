//the constructor is a aspecial child. need to specify specific info in specific order
console.log("order class loaded")

class Order {
    constructor(basketId, orderId, dateAdded, recipientName, recipientAddress, deliveryDate, deliveryTime) {
        this.basketId = basketId; //tied to specific user?
        this.orderId = orderId; //the details of what flower, color, quantity?
        this.dateAdded = dateAdded;
        this.recipientName = recipientName;
        this.recipientAddress = recipientAddress;
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
    }
    
}

var order = []
