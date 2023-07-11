import express from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { Bodegas } from "../controller/bodegas.js";

const proxyBodegas = express();
proxyBodegas.use((req,res,next) =>{
    try{
        let data = plainToClass(Bodegas, req.body, { excludeExtraneousValues: true });
        req.body = data;
        next();
    }
    catch(err){
        res.status(err.status).send(err.message);
    }
})

export default proxyBodegas;