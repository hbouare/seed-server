import logger from "./logger.js"
import { MongoClient } from "mongodb"

export default async function connectToDataBase(url, databaseName) {
  try {
    const client = new MongoClient(url)
    await client.connect()
    const db = client.db(databaseName)
    logger.info("Connected to MongoDB")
    return db
  } catch (error) {
    logger.error("Error connecting to MongoDB:", error)
    throw error
  }
}
