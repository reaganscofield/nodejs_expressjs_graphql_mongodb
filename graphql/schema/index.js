const { buildSchema } = require("graphql");
const { userType }  = require("./schematesting");


console.log(userType);

module.exports = buildSchema(`

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        username: String!
        dob: String!
        email: String!
        password: String!
        active: Boolean!
        createdAt: String
        updatedAt: String
    }

    type Query {
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        createUser(
            firstName: String!
            lastName: String!
            username: String!
            dob: String!
            email: String!
            password: String!
            active: Boolean!
            createdAt: String!
            updatedAt: String!
        ): User

        deleteUser(
            _id: ID!
        ): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);