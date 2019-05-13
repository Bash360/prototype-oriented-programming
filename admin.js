const user = require("./user");
const order=require("./order");
admin = function (name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    user.call(this, name, email, password);
}
admin.prototype = Object.create(user.prototype);
admin.prototype.constructor = admin;
admin.prototype.readAllUsers = function () {
    if (userDatabase.length === 0) {
        console.log(`user database is empty`);
        return `user database is empty`;
    } else {
        userDatabase.forEach(function (element) {
            console.log(element);
        });
        return userDatabase;
    }
}
admin.prototype.deleteUser = function (id) {
    let found = false;

    userDatabase.forEach((element, index) => {
        if (element.id === id) {
            userDatabase.splice(index, 1);
            console.log("user deleted " + element.name);
            found = true;
        }
    });
    if (!found) {
        return ("user with id not found");
    } else {
        return "user deleted";
    }

}
admin.prototype.deleteAllUsers = function () {
    if (userDatabase.length !== 0) {
        userDatabase.length = 0;
        return "Deleted all users";
    } else {
        return "user database empty";
    }


}
admin.prototype.updateUser = function (id, name, email, password) {
    let found = false;
    userDatabase.forEach((element) => {
        if (element.id === id) {
            element.name = name;
            element.email = email;
            element.password = password;
            found = true;
        }
    });

    if (!found) {
        return "user not found";
    } else {
        return `updated`;
    }

}
admin.prototype.readOrder = function (orderID) {
    return order.prototype.readOrder(orderID);
}
admin.prototype.readAllOrders = function () {
    return order.prototype.readAllOrders();
}
admin.prototype.updateOrder = function (orderID, ...products) {
    return order.prototype.updateOrder(orderID,...products);
}
admin.prototype.deleteOrder = function (orderID) {
  return order.prototype.deleteOrder(orderID);

}
admin.prototype.deleteAllOrders = function () {
   return  order.prototype.deleteAllOrders();
}
enigma= new admin("bash bash","freeme@gmail.com","pass");
console.log(Object.getPrototypeOf(admin));
module.exports = admin;