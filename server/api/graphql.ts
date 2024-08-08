import { Resolvers } from "#graphql/resolver"
import { schema } from "#graphql/schema"
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateH3Handler } from "@as-integrations/h3"
import merge from 'lodash.merge'
import rProductos from "../gql/resolvers/productos"

const resolvers: Resolvers = merge(rProductos);

const aServer = new ApolloServer({ typeDefs: schema, resolvers });

export default startServerAndCreateH3Handler(aServer);


