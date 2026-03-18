class User {
    constructor(name,mail ) {
        this.name = name;
        this.mail = mail;
    }
    login(){
        console.log(`${this.name} has just logged in.`);
    }
}

let user1 = new User('Ayushi', 'ayushi@mail');

class Admin extends User{
    constructor(name, mail, role){
        super(name,mail);
        this.role = role;
    }

    deleteUser(name){
        console.log(`${this.role} ${this.name} removed user ${name}`);
    }
}

let admin = new Admin('Aryaman', 'admin@123', 'ADMIN')

class Customer extends User{
    constructor(name, mail, cartItems){
        super(name, mail);
        this.cartItems = cartItems;
    }

    itemAdd(){
        this.cartItems++;
        console.log(`${this.name} just added an item to their cart.`)
    }
    itemRemove(){
        this.cartItems--;
        console.log(`${this.name} just removed an item to their cart.`)
    }

    cartSize(){
        console.log(`${this.name} cart has ${this.cartItems} items.`)
    }
}
let customer = new Customer('Ayushi', 'ayushu@123',10);
