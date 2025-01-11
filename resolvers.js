import { getProjects } from "./db/project.js"
import GraphQLJSON from "graphql-type-json"
import GraphQLTimestamp from "./GraphQLTimestamp.js"

export const resolvers = {
  // GraphQLJSON: GraphQLJSON,
  // URL: URL,
  // GraphQLTimestamp: GraphQLTimestamp,
  // Query: {
  //   projects: () => getProjects(),
  // },
  //   Project: {
  //     name: (project) => getProject(project.name),
  //     subtitle: (project) => getProject(project.subtitle),
  //   },
}
