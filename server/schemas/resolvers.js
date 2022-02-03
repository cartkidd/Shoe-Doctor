const { User, Shoe } = require('../models');

const resolvers = {
  Query: {
    shoes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Shoe.find(params).sort({ createdAt: -1 });
    }
  }
};


module.exports = resolvers;