import { getProjects } from "./db/project.js"
import { GraphQLURL, GraphQLTimestamp, GraphQLJSON } from "graphql-scalars" // https://the-guild.dev/graphql/scalars/docs/quick-start

export const resolvers = {
  GraphQLTimestamp,
  GraphQLJSON,
  URL: GraphQLURL,
  // Query: {
  //   projects: () => getProjects(),
  // },
  //   Project: {
  //     name: (project) => getProject(project.name),
  //     subtitle: (project) => getProject(project.subtitle),
  //   },
}
