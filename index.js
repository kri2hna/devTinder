 import express from "express";
 import dotenv from "dotenv";
 import db from "./src/config/database.js"

 const app = express();
 dotenv.config();
 const port = process.env.PORT || 4000;

app.get("/home",(req,res) => {
    res.send("hello");
})

db();
 app.listen(port);


