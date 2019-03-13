const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Users = require("../../models/users");

module.exports = {
    
    users: () => {
        return Users.find().then((response) => {
            response.map((eachUser) => {
                return {
                    ...eachUser._doc,
                }
            })
        }).catch((err) => { throw err; })
    },

    user: (args) => {
        return Users.findById({ _id: args._id}).then((response) => {
            if(response){
                return {
                    ...response._doc
                }
            } else {
                throw new Error("user not fund");
            }
        }).catch((err) => { throw err; })
    },

    createUser: (args) => {
        return Users.findOne({email: args.email}).then((user) => {
            if(user){
                if(user.email === args.email){
                    console.log(user.username)
                    throw new Error("use with same email existes already");
                } else if (user.username === args.username) {
                    throw new Error("use with same email existes already");
                }
            }
            return bcrypt.hash(args.password, 12)
        }).then((hashedPassword) => {
            const user = new Users({
                firstName: args.firstName,
                lastName: args.lastName,
                username: args.username,
                dob: args.dob,
                email: args.email,
                password: hashedPassword,
                active: args.active,
                createdAt: args.createdAt,
                updatedAt: args.updatedAt,
            })
            return user.save();
        }).then((response) => {
            if(response) {
                return {
                    ...response._doc
                }
            }
        }).catch((err) => { throw err; });
    },


    deleteUser: (args) => {
        return Users.remove({ _id: args._id }).then((response) => {
            if(response) {
                return {
                    ...true
                }
            } else {
                throw new Error("user not fund")
            }
        }).catch((err) => { throw err; })
    }
}

