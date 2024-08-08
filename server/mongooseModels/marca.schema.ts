import { defineMongooseModel } from "#nuxt/mongoose"
import mongoose from "mongoose"


const esquemaMarca = new mongoose.Schema({
	nombre: {
		type: String,
		unique: true,
		minLength: 2,
		maxLength: 100,
	},
	administrador: {
		type: String,
		minLength: 2,
		maxLength: 100,
	},
	telefono: {
		type: String,
		minLength: 6,
		maxLength: 30,
	},

});
export const Marca = defineMongooseModel('Marca', esquemaMarca);
