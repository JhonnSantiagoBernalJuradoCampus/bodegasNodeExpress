import dotenv from "dotenv";
import mysql from 'mysql2';
import { Router } from "express";
import proxyBodegas from "../middleware/proxyBodegas.js";
dotenv.config();
const storageBodegasPost = Router();
let con = undefined;

storageBodegasPost.use((req, res, next) => {
    let my_config = JSON.parse(process.env.MY_DB);
    con = mysql.createPool(my_config);
    next();
})
storageBodegasPost.post("/", proxyBodegas, (req, res) => {
    /**Los parametros que recibe son:
    {
        "id": 200,
        "nombre": "asdefg",
        "id_responsable": 11,
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    }
     */
    const { id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at } = req.body;
    con.query(
    /*sql*/ `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) VALUES (?,?,?,?,?,?,?,?,?)`,
        [id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at],

        (err, data, fil) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error al agregar la bodega");
            } else {
                console.log(req.body);
                res.send("Se ha agregado con éxito");
            }
        }
    );
})

export default storageBodegasPost;