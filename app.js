import express from "express";
import dotenv from "dotenv";
import storageBodegas from "./routers/bodegas.js";
dotenv.config();

const appExpress = express();
appExpress.use(express.json());
appExpress.use("/bodegas", storageBodegas);

const config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));