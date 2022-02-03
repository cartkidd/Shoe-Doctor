import { gql } from '@apollo/client';

export const QUERY_SHOES = gql`
  query shoes($username: String) {
    shoes(username: $username) {
      _id
      shoeText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;