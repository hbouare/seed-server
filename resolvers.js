import { getAllProjects } from "./db/project.js"
import { GraphQLURL, GraphQLTimestamp, GraphQLJSON } from "graphql-scalars"

export const resolvers = {
  GraphQLTimestamp,
  GraphQLJSON,
  URL: GraphQLURL,
  Query: {
    projects: () => getAllProjects(),
  },
  //   Project: {
  //     name: (project) => getProject(project.name),
  //     subtitle: (project) => getProject(project.subtitle),
  //   },
}
