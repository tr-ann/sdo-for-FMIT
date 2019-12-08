//import 'babel-polyfill'
/*const request = require("supertest")
const assert = require("assert")
const bcrypt = require('bcrypt')

var server = require("../bin/www").server

describe("Express Tests", function() {

    it("should return new user", function(done) {
         
        request(server)
            .post("/users")
            .send({
                login: 'user1', 
                password: 'user1'
            })
            .expect({
                id: 1,
                login: 'user1',
                password: bcrypt.hash('user1')
            })
            .end(done)
    })
    
    /*it("should return NotFound with status 404", function(done) {
         
        request(server)
            .get("/error")
            .expect(404)
            .expect("NotFound")
            .end(done)
    })
 
    it("should return user with name Tom and age 22", function(done) {
         
        request(server)
            .get("/user")
            .expect(function(response) {
                assert.deepEqual(response.body, {name:"Tom", age:22})
            })
            .end(done)
    })
})*/