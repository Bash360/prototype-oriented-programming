const user = require("./user");
const admin = require("./admin");
bash = new user("mark bashir", "beejayphil@gmail.com", "password");
chidera = new user("chidera stephen hopewell", "chidera@gmail.com", "blahblah");
enigma = new admin("mark bashorun", "bashorun@enigma.com", "password");
tolu = new user("tolu adeshina", "toluadesina@gmail.com", "password");
bolu = new user("tolu adeshina", "toluadesina@gmail.com", "password");
enigma.deleteUser(bash.getID);


describe("User object Test for prototype ", () => {
    it("expects to return object", () => {
        expect(bash.readUser(chidera.getID)).toHaveProperty("name", "email", "password", "id");
    });
    it("expects to return user not found", () => {
        expect(bash.readUser(bash.getID)).toMatch("user not found");
    });
    it("expects to return user not found", () => {
        expect(bash.updateUser("chidera stephen hopewell", "chidera@gmail.com", "blahblah")).toMatch("user not found");
    });

    it("expects to return updated", () => {
        expect(chidera.updateUser("chidera stephen hopewell", "chidera@gmail.com", "blahblah")).toMatch(`updated`);

    });
    it("expects to return false", () => {
        expect(chidera.searchUser("mark bashir")).toBeFalsy();

    });
    it("expects to return an array of object", () => {
        expect(chidera.searchUser(`mark bashorun`)).toContainEqual({
            name: 'mark bashorun',
            email: 'bashorun@enigma.com',
            password: 'password',
            id: 3
        });

    });
    it(`expects to return "order created"`, () => {
        expect(chidera.createOrder("condom", "sweat shirt", "blue jeans")).toMatch("order created");

    });
    it(`expects to return "user not found cant created order"`, () => {
        expect(bash.createOrder("condom", "sweat shirt", "blue jeans")).toMatch("user not found cant create order");

    });

});