function login(){
    // var list = document.getElementById("user")
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for(i = 0; i < customer.length; i++) {
        if(username == customer[i].username && password == customer[i].
        password) { 
        console.log("username:" + username + " password:" + password);
         } else {
            customer = JSON.parse(localStorage.getItem('customer'));
            for (let i = 0; i < customer.length; i++) {
              customer[i] = new User(customer[i].username, customer[i].password);
          }
    window.location = "./entrypage.html";
    return false
        } 
        
    
    } alert("login is not correct")}