import { gql } from "apollo-server"

export const userTypeDef = gql`
  interface UserAttr {
    username: String
    firstName: String
    lastName: String
    email: String
    avatarUrl: String
  }
  type User implements Row & UserAttr {
    PK: ID!
    SK: String
    createdAt: Date
    updatedAt: Date
    username: String
    firstName: String
    lastName: String
    email: String
    avatarUrl: String
  }
  extend type Mutation {
    createUser(username: String!, email: String!): User @development
    updateUserAvatarUrl(avatarUrl: String!): User @auth
  }
  extend type Query {
    getUser(username: String!, email: String!): User
    queryUsers: [User]
  }
`
