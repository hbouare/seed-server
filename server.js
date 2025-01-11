import { ApolloServer } from "@apollo/server"
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4"
import cors from "cors"
import express from "express"
import { readFile } from "node:fs/promises"
import { resolvers } from "./resolvers.js"
import connectToDatabase from "./utils.js"

const PORT = 9000
const MONGO_DB_URL = "mongodb://localhost:27017/"
const MONGO_DB_NAME = "seed"

connectToDatabase(MONGO_DB_URL, MONGO_DB_NAME)

const app = express()
app.use(cors(), express.json())

const typeDefs = await readFile("./schema.graphql", "utf8")

console.log(typeDefs)

const apolloServer = new ApolloServer({ typeDefs, resolvers })
await apolloServer.start()
app.use("/graphql", apolloMiddleware(apolloServer))

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`)
})
