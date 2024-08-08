import { GraphQLError } from "graphql";
import { Resolvers } from "#graphql/resolver"
import { Producto } from "../../mongooseModels/producto.schema"

const resolvers: Resolvers = {
	Query: {
		async getProductos() {
			console.log(`Hit en productos`);
			let losProductos;
			try {
				losProductos = await Producto.find({}).populate("idMarca").exec();

			} catch (error) {
				console.log(`Error getting productos: ${error}`);
				throw new GraphQLError("Error conectando con la base de datos", { extensions: { code: "INTERNAL_SERVER_ERROR" } });
			}
			return losProductos;
		}
	},
	Producto: {
		marca(parent) {
			console.log(`Usando ${parent.idMarca}`);
			return parent.idMarca
		}
	}
}
export default resolvers;
