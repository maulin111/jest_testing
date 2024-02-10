const express = require('express');
const app = express();
 
const obj = require('../Meta/json/employee.json');
app.get("/testjson",(req,res)=>{
    return res.json([obj.name , obj.salary , obj.married]);
});

module.exports = app;