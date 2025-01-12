import { ApolloServer } from "@apollo/server"
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4"
import cors from "cors"
import express from "express"
import { readFile } from "node:fs/promises"
import { resolvers } from "./resolvers.js"
import logger from "./utils/logger.js"
import { SERVER_PORT } from "./utils/constants.js"

const app = express()
app.use(cors(), express.json())

const typeDefs = await readFile("./schema.graphql", "utf8")

const apolloServer = new ApolloServer({ typeDefs, resolvers })
await apolloServer.start()
app.use("/graphql", apolloMiddleware(apolloServer))

app.listen({ port: SERVER_PORT }, () => {
  logger.info(`Server running on port ${SERVER_PORT}`)
  logger.info(`GraphQL endpoint: http://localhost:${SERVER_PORT}/graphql`)
})
