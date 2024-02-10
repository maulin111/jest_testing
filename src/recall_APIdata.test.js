const app = require('../server');
process.env.NODE_ENV = "test";
const request = require("supertest");

describe("To get the empoyee info", ()=>{

    //to external json file
    test ("Display the employee information", async()=>{
        const response = await request(app).get('/testjson');
        expect(response.body).toEqual(["maulin",56000,true]);
        expect(response.statusCode).toBe(200);
    })

})