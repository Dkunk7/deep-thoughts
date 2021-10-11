const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => { // This is supposed to match the name of the query in typeDefs; parent, even if empty, is required to use the second argument, args (which is destructured to username here)
            const params = username ? { username } : {}; // if username exists, set params to object named username, otherwise return empty object (ternary operator = ?)
            return Thought.find(params).sort({ createdAt: -1 }); // This sort() orders the returned data by createdAt in descending order (-1); This runs regardless of whether params has a value or not
        },
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('thoughts');
        }
    }
};

module.exports = resolvers;