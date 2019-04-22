const user = require("./user");
const admin = require("./admin");
enigma.deleteUser(bash.getID);


describe("User object Test for prototype ", () => {
    it("expects to return object", () => {
        expect(enigma.readUser(chidera.getID)).toHaveProperty("name", "email", "password", "id");
    });
    it("expects to return user not found", () => {
        expect(enigma.readUser(bash.getID)).toMatch("user not found");
    });
    it("expects to return user not found", () => {
        expect(bash.updateUser("chidera stephen hopewell", "chidera@gmail.com", "blahblah")).toMatch("user not found");
    });
    
    it("expects to return updated", () => {
        expect(chidera.updateUser("chidera stephen hopewell", "chidera@gmail.com", "blahblah")).toMatch(`updated`);

    });
    it("expects to return false", () => {
        expect(enigma.searchUser("mark bashir")).toBeFalsy();

    });
    it("expects to return an array of object", () => {
        expect(enigma.searchUser(`mark bashorun`)).toContainEqual({
            name: 'mark bashorun',
            email: 'bashorun@enigma.com',
            password: 'password',
            id: 3
        });

    });
    it(`expects to return "order created"`, () => {
        expect(enigma.createOrder("condom","sweat shirt","blue jeans")).toMatch("order created");

    });
    it(`expects to return "user not found cant created order"`, () => {
        expect(bash.createOrder("condom","sweat shirt","blue jeans")).toMatch("user not found cant created order");

    });
    it(`expects to return "user with id not found"`, () => {
        expect(enigma.deleteUser(bash.getID)).toMatch("user with id not found");

    });
    it(`expects to return "user deleted"`, () => {
        expect(enigma.deleteUser(tolu.getID)).toMatch(`user deleted`);

    });
    it(`expects to return "user with id not found"`, () => {
        expect(enigma.deleteUser(tolu.getID)).toMatch(`user with id not found`);

    });
   
    it(`expects to return "user not found"`, () => {
        expect(enigma.updateUser(bash.getID,"mark bashir-ugwi","bee@ymail.com","passw")).toMatch(`user not found`);

    });
    it(`expects to return "updated"`, () => {
        
        expect(enigma.updateUser(bolu.getID,"mark bashir-ugwi","bee@ymail.com","passw")).toMatch(`updated`);

    });
    it(`expects to return "updated"`, () => {
        
        expect(enigma.updateUser(bolu.getID,"mark bashir-ugwi","bee@ymail.com","passw")).toMatch(`updated`);

    });
    it(`expects to return object`, () => {
        
        expect(enigma.readOrder(1)).toHaveProperty("userID",
            "products",
            "orderTime",
            "orderDate",
            "orderID");

    });
    it(`expects to return array`, () => {
        arrayoforders=enigma.readAllOrders()
        expect(arrayoforders[0]).toMatchObject({"orderID":1});

    });
    it(`expects to return "updated"`, () => {
        
        expect(enigma.updateOrder(1,"phone","book")).toMatch(`updated`);

    });
    it(`expects to return false`, () => {
        
        expect(enigma.updateOrder(3,"phone","book")).toBeFalsy();

    });
    it(`expects to return "order with id not found"`, () => {
        
        expect(enigma.deleteOrder(3)).toMatch(`order with id not found`);

    });
    it(`expects to return "deleted"`, () => {
        
        expect(enigma.deleteOrder(1)).toMatch(`deleted`);

    });
   


});
// it(`expects to return "Deleted all users"`, () => {
//     expect(enigma.deleteAllUsers()).toMatch(`Deleted all users`);
// });