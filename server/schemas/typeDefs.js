const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input SavedBookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String
  }
  type Query {
    user: User 
  }
   type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: ID!): User
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;