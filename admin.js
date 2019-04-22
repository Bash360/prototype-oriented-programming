const user = require("./user");
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
    let found = false;
    let allOrder;
    orderDatabase.forEach((element) => {

        if (element.orderID === orderID) {
            console.log(`user: ${element.userID} ordered for \nproducts: ${element.products}\n
           at ${element.orderTime} on the ${element.orderDate}

           `);
            found = true;
            allOrder = element;
        }
    });
    if (!found) {
        console.log("order not found");
    } else {
        return allOrder;
    }
}
admin.prototype.readAllOrders = function () {
    let orders = [];
    if (orderDatabase.length === 0) {
        console.log(`order database is empty`);
        return `order database is empty`;
    } else {
        orderDatabase.forEach(function (element) {
            console.log(element);
            orders.push(element);
        });
        return orders;
    }
}
admin.prototype.updateOrder = function (orderID, ...products) {
    let time = new Date();
    let found = false;
    let orderTime = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
    let orderDate = `${time.getFullYear()}-${time.getDate()}-${time.getMonth()+1}`;
    orderDatabase.forEach((element) => {
        if (element.orderID === orderID) {
            element.products = products;
            element.orderDate = orderDate;
            element.orderTime = orderTime;
            found = true;
        }
    });
    if (!found) {
        console.log("order not found");
        return false;
    } else {
        return "updated"
    }
}
admin.prototype.deleteOrder = function (orderID) {
    let found = false;
    orderDatabase.forEach((element, index) => {
        if (element.orderID === orderID) {
            orderDatabase.splice(index, 1);
            console.log("order deleted " + element.products);
            found = true;
        }
    });
    if (!found) {
        return "order with id not found";
    } else {
        return `deleted`;
    }




}
admin.prototype.deleteAllOrders = function () {
    if (orderDatabase.length !== 0) {
        orderDatabase.length = 0;
        console.log("Deleted all orders");
        return console.log(`Deleted all orders`);
    } else {
        return console.log(`order database empty!!!`);
    }
}
bash = new user("mark bashir", "beejayphil@gmail.com", "password");
chidera = new user("chidera stephen hopewell", "chidera@gmail.com", "blahblah");
enigma = new admin("mark bashorun", "bashorun@enigma.com", "password");
tolu=new user("tolu adeshina", "toluadesina@gmail.com", "password");
bolu=new user("tolu adeshina", "toluadesina@gmail.com", "password");

module.exports = admin;