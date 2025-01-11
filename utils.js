import mongoose from "mongoose"

export default async function connectToDataBase(url, databaseName) {
  try {
    await mongoose.connect(`${url}/${databaseName}`)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}
