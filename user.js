const order = require("./order");
let userDatabase = [];
let id = 1;

user = function (name, email, password) {
    let userid = id;
    this.name = name;
    this.email = email;
    this.password = password;
    Object.defineProperty(this, "getID", {
        get: function () {
            return userid;
        }
    });
    userDatabase.push({
        name: this.name,
        email: this.email,
        password: this.password,
        id: this.getID
    });


    id++;
    console.log(`Account created`);
}

user.prototype.readUser = function (id) {
    let found = false;
    let foundUser;
    userDatabase.forEach((element) => {

        if (element.id === id) {
            console.log(`Name: ${element.name} \nEmail: ${element.email}`);
            found = true;
            foundUser = element;
        }
    });
    if (!found) {
        console.log("user not found")
        return "user not found";
    } else {
        return foundUser;
    }

}

user.prototype.updateUser = function (name, email, password) {
    let found = false;

    userDatabase.forEach((element) => {
        if (element.id === this.getID) {
            element.name = name;
            element.email = email;
            element.password = password;
            found = true;

        }
    });

    if (!found) {
        console.log("user not found")
        return `user not found`;
    } else {
        console.log("updated");
        return "updated";
    }
};
user.prototype.searchUser = function (name) {
    let found = false
    let foundUser = [];
    userDatabase.forEach(function (element) {

        if (name.toLowerCase() === element.name) {
            console.log(`found ${element.name}`);
            found = true;
            foundUser.push(element);

        }
    });
    if (!found) {
        console.log(found);
        return false;

    } else {
        console.log(foundUser);
        return foundUser;
    }
}

user.prototype.createOrder = function (...products) {
    found = false;
    userDatabase.forEach((element) => {
        if (this.getID === element.id) {
            found = true
        }
    });
    if (found) {
        return order.prototype.createOrder(this.getID, ...products);
    } else {
        return "user not found cant create order";
    }
}

module.exports = user;
bash=new user("blhhsahsh","blhhsahsh","blhhsahsh");
cynt=new user("blhhsahsh","blhhsahsh","blhhsahsh");
console.log(bash.getID);