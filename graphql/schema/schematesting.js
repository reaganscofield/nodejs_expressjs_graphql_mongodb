const  userType = `
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
`

exports = userType;