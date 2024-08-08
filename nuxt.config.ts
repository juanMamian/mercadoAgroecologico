// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-server", "nuxt-mongoose", "@nuxtjs/apollo"],

  graphqlServer: {
    url: "api/graphql"
  },
  $development:{
    apollo: {
      clients: {
        default: {
          httpEndpoint: "http://localhost:3000/api/graphql"
        }
      }
    },
  },
  apollo:{
    clients:{
      default:{
          httpEndpoint: "https://mercadoagroecologico.vercel.app:3000/api/graphql"
      }
    }
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: "mongooseModels",
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-08-07"
})
