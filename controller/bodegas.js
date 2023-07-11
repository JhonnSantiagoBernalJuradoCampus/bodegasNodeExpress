var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class Bodegas {
    constructor(id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) {
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
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "El dato id no cumple con los parametros acordados" };
    }),
    __metadata("design:type", Number)
], Bodegas.prototype, "id", void 0);
__decorate([
    Expose({ name: "nom_com" }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "El dato nombre no cumple con los parametros acordados" };
    }),
    __metadata("design:type", String)
], Bodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "idResponsable" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "El dato idResponsable no cumple con los parametros acordados" };
    }),
    __metadata("design:type", Number)
], Bodegas.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "Estado" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "El dato Estado no cumple con los parametros acordados" };
    }),
    __metadata("design:type", Number)
], Bodegas.prototype, "estado", void 0);
__decorate([
    Expose({ name: "Creado" }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "El dato Creado no cumple con los parametros acordados" };
    }),
    __metadata("design:type", Number)
], Bodegas.prototype, "created_by", void 0);
__decorate([
    Expose({ name: "Actualizado" }),
    Transform(({ value }) => {
        if (value === undefined)
            return null;
        else if (value === "string")
            return value;
    }),
    __metadata("design:type", Number)
], Bodegas.prototype, "update_by", void 0);
__decorate([
    Expose({ name: "createdAt" }),
    Transform(({ value }) => {
        if (value === undefined)
            return null;
        else if (value === "string")
            return value;
    }),
    __metadata("design:type", String)
], Bodegas.prototype, "created_at", void 0);
__decorate([
    Expose({ name: "ActualizadoAt" }),
    Transform(({ value }) => {
        if (value === undefined)
            return null;
        else if (value === "string")
            return value;
    }),
    __metadata("design:type", String)
], Bodegas.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: "DeletedAt" }),
    Transform(({ value }) => {
        if (value === undefined)
            return null;
        else if (value === "string")
            return value;
    }),
    __metadata("design:type", String)
], Bodegas.prototype, "deleted_at", void 0);
