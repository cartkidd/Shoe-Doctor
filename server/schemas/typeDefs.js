const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    shoes: [Shoe]
    friends: [User]
  }

  type Shoe {
    _id: ID
    shoeText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
     token: ID!
     user: User
   
}

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    shoes(username: String): [Shoe]
    shoe(_id: ID!): Shoe
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addShoe(shoeText: String!): Shoe
    addReaction(shoeId: ID!, reactionBody: String!): Shoe
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
