import {Expose, Type, Transform} from "class-transformer"
export class Bodegas{
    @Expose({name: "ID"})
    @Transform(({ value })=> {
        if (Math.floor(value) && typeof value === "number")
        return Math.floor(value);
        else throw {status: 400, message: "El dato id no cumple con los parametros acordados"}
    })
    id:number;
    @Expose({name: "nom_com"})
    @Transform(({ value })=>{
        if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status: 400, message: "El dato nombre no cumple con los parametros acordados"}
    })
    nombre: string;
    @Expose({name: "idResponsable"})
    @Transform(({ value}) =>{
        if (Math.floor(value) && typeof value === "number")
        return Math.floor(value);
        else throw {status: 400, message: "El dato idResponsable no cumple con los parametros acordados"}
    })
    id_responsable: number;
    @Expose({name: "Estado"})
    @Transform(({ value })=>{
        if (Math.floor(value) && typeof value === "number")
        return Math.floor(value);
        else throw {status: 400, message: "El dato Estado no cumple con los parametros acordados"}
    })
    estado: number;
    @Expose({name: "Creado"})
    @Transform(({ value }) =>{
        if (Math.floor(value) && typeof value === "number")
        return Math.floor(value);
        else throw {status: 400, message: "El dato Creado no cumple con los parametros acordados"}
    })
    created_by: number;
    @Expose({name: "Actualizado"})
    @Transform(({ value }) => {
        if (value === undefined)
        return null;
        else if (value === "string")
        return value;
    })
    update_by: number;
    @Expose({name: "createdAt"})
    @Transform(({ value }) => { 
        if (value === undefined)
        return null;
        else if (value === "string")
        return value;
    })
    created_at: string;
    @Expose({name: "ActualizadoAt"})
    @Transform(({ value }) => { 
        if (value === undefined)
        return null;
        else if (value === "string")
        return value;
    })
    updated_at: string;
    @Expose({name: "DeletedAt"})
    @Transform(({ value }) => { 
        if (value === undefined)
        return null;
        else if (value === "string")
        return value;
    })
    deleted_at: string;
    constructor(id:number,nombre: string,id_responsable: number,estado: number,created_by: number,update_by: number,created_at: string,updated_at: string,deleted_at: string){
        this.id = id;
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
        this.update_by = update_by;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}