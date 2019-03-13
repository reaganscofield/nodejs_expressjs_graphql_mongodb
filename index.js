const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const graphQLHTTP = require("express-graphql");
const moongose = require("mongoose");

const graphQLSchemas = require("./graphql/schema/index");
const graphQLResolvers = require("./graphql/resolvers/index");
// const isAuth = require("./middlware/isAuth");

const Application = express();

Application.use(bodyParser.json());

// Application.use(isAuth);



Application.use('/graphql', graphQLHTTP({
    schema: graphQLSchemas,
    rootValue: graphQLResolvers,
    graphiql: true
}));


const db = process.env.dbUrl;
moongose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true
    }
).then(() => console.log("Connected"))
 .catch(err => console.log(err));


Application.listen(3400);