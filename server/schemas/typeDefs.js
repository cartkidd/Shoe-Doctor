// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Shoe {
  _id: ID
  shoeText: String
  createdAt: String
  username: String
  reactionCount: Int
},

type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}



  type Query {
    shoes(username: String): [Shoe]
  }
`;


// export the typeDefs
module.exports = typeDefs;