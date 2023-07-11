import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";
import total from "../middleware/productos.js";
dotenv.config();
const storageProductos = Router();
let con = undefined;

storageProductos.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
storageProductos.get("/", total, (req, res) => {
    con.query(
        /*sql */`SELECT * FROM productos ORDER BY total DESC;`,
        (err,data,fill)=>{
            console.log(data)
            res.send(JSON.stringify(data));
        }
    )
})

export default storageProductos;