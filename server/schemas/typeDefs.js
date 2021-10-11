// import the gql tagged template function (tagged templates are an advanced use of template literals[introduced with ES6])
const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User] 
    }

    type Thought {
        _id: ID
        thoughtText: String
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

    type Query {
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought] 
        thought(_id: ID!): Thought
    }
`;
// thoughts(username: String) tells the Query that it COULD take username as a parameter, which would allow a search for thoughts by a specific user
// adding a ! after these parameters tells the Query that the parameter can't be null

// export typeDefs (obviously)
module.exports = typeDefs;