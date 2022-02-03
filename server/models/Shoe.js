const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const shoeSchema = new Schema(
  {
    shoeText: {
      type: String,
      required: 'You need to leave a shoe reply!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

shoeSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Shoe = model('Shoe', shoeSchema);

module.exports = Shoe;
