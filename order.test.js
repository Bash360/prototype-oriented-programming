const order = require("./order");
myOrder = new order();
describe("Test for order", () => {
    it("expects order to return order created", () => {
        expect(myOrder.createOrder("macbook", "airpod")).toMatch(`order created`);
    })
    it("expects order to return ", () => {
        expect(myOrder.readOrder(1)).toHaveProperty("userID",
            "products",
            "orderTime",
            "orderDate",
            "orderID");
    })
    it("expects order to return order not found ", () => {
        expect(myOrder.readOrder(5)).toMatch(`order not found`);
    })
    it(`expects to return array`, () => {
        arrayoforders = myOrder.readAllOrders()
        expect(arrayoforders[0]).toMatchObject({
            "orderID": 1
        });

    });

    it("expects order to return order not found ", () => {
        expect(myOrder.updateOrder(5, "sneakers")).toBeFalsy()
    })
    it("expects order to return order updated ", () => {
        expect(myOrder.updateOrder(1, "sneakers")).toMatch(`updated`);
    })
    it("expects order to return order deleted ", () => {
        expect(myOrder.deleteOrder(1)).toMatch(`deleted`);
    })
    it("expects order to return order with id not found ", () => {
        expect(myOrder.deleteOrder(5)).toMatch(`order with id not found`);
    })
    it("expects order to return deleted all orders ", () => {
        expect(myOrder.deleteAllOrders()).toMatch(`order database empty!!!`);
    })
});