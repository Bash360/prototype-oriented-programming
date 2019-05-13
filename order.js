let orderDatabase = [];
let orderID = 1;
order = function () {

}
order.prototype.createOrder = function (userID = null, ...products) {
    let time = new Date();
    let orderTime = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
    let orderDate = `${time.getFullYear()}-${time.getDate()}-${time.getMonth()+1}`;
    orderDatabase.push({
        userID,
        products,
        orderTime,
        orderDate,
        orderID
    });
    console.log(`order successfully created your order ID is ${orderID}`);
    orderID++;
    return `order created`;
}
order.prototype.readOrder = function (orderID) {
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
        return "order not found";
    } else {
        return allOrder;
    }
}
order.prototype.readAllOrders = function () {
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
order.prototype.updateOrder = function (orderID, ...products) {
    let time = new Date();
    let found = false;
    let orderid;
    let orderTime = `${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}`;
    let orderDate = `${time.getFullYear()}-${time.getDate()}-${time.getMonth()+1}`;
    orderDatabase.forEach((element) => {
        if (element.orderID === orderID) {
            element.products = products;
            element.orderDate = orderDate;
            element.orderTime = orderTime;
            found = true;
            orderid = element.orderID;

        }
    });
    if (!found) {
        console.log("order not found");
        return false;
    } else {
        console.log("updated orderID " + orderid);
        return "updated"
    }
}
order.prototype.deleteOrder = function (orderID) {
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
order.prototype.deleteAllOrders = function () {
    if (orderDatabase.length !== 0) {
        orderDatabase.length = 0;
        console.log("Deleted all orders");
        return `Deleted all orders`;
    } else {
        return `order database empty!!!`;
    }
}
module.exports = order;
