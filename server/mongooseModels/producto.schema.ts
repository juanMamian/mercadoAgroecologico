import { defineMongooseModel } from "#nuxt/mongoose"
import { Marca } from "./marca.schema"
import mongoose from "mongoose"
console.log(`Using ${Object.keys(Marca).length}`);
const esquemaProducto = new mongoose.Schema({
	nombre: {
		type: String,
		minLength: 2,
		maxLength: 100,
	},
	unidad_venta: {
		type: String,
		minLength: 2,
		maxLength: 100,
	},
	precio: {
		type: String,
		minLength: 6,
		maxLength: 30,
	},
	cantidadDisponible: {
		type: Number,
		default: 0,
		min: 0
	},
	idMarca: { type: mongoose.Schema.Types.ObjectId, ref: 'Marca' }

});
export const Producto = defineMongooseModel('Producto', esquemaProducto);
