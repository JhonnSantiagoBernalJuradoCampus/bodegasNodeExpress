import dotenv from "dotenv";
import mysql from 'mysql2';
import {Router} from "express";

const storageBodegas = Router();
let con = undefined;

storageBodegas.use((req,res,next)=>{
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
storageBodegas.get("/",(req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM bodegas`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    );
})

export default storageBodegas;