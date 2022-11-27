const express = require('express');
const db = require('./db');
const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())


app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM  table_products", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });