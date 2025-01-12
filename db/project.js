import { MONGO_DB_URL, MONGO_DB_NAME } from "../utils/constants.js"
import connectToDatabase from "../utils/utils.js"

export const getAllProjects = async () => {
  const db = await connectToDatabase(MONGO_DB_URL, MONGO_DB_NAME)
  console.log(await db.collection("project").find().toArray())
  return await db.collection("project").find().toArray()
}
