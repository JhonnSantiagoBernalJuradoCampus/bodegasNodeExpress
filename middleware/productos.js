import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";
dotenv.config();
const total = Router();
let con = undefined;

total.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
total.use((req, res, next) =>{
    con.query(
        /*sql*/`SELECT * FROM inventarios`,
        (err, data, fill) => {
            const totalPorProducto = {};
            data.forEach((val, id) => {
                if (totalPorProducto[val.id_producto]) {
                    totalPorProducto[val.id_producto][1] += val.cantidad  
                }
                else {
                    totalPorProducto[val.id_producto] = [val.id_producto,val.cantidad]
                }
            });
            
            con.query(
                /*sql */`
                ALTER TABLE productos ADD COLUMN total INT(10);`,
                (err,data,fill)=>{
                    con.query(
                        /*sql */`
                            SELECT* FROM productos;`,
                        (err,data1,fill)=>{
                            if (err) throw err;
                            data1.forEach((val,id)=>{
                                if (totalPorProducto[val.id]){
                                    con.query(
                                        /*sql */`UPDATE productos SET total = ${totalPorProducto[val.id][1]} WHERE id = ${val.id}`,
                                        (err,data,fill)=>{
                                            if(err){
                                                console.log(err)
                                            }
                                        }
                                    )
                                }
                            })
                        }
                    );
                }
            )
        }
    )
    next()
    
})
export default total;