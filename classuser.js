//the constructor is a aspecial child. need to specify specific info in specific order
console.log("classUser.loaded")

class User {
    constructor(firstName, lastName, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
}