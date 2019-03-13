# nodejs_expressjs_graphql_mongodb
NodeJS ExpressJS GraphQL MongoDB Server

dependencies needed for this tutorials 

you can install them with command "npm install package_name --save"


initial our projects

``
$ npm init

``

hit enter until the end, and type yes hit enter again

```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "express-graphql": "^0.7.1",
    "graphql": "^14.1.1",
    "jsonwebtoken": "^8.5.0",
    "mongoose": "^5.4.14",
    "dotenv": "^7.0.0",
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  }

```

in order to keep our server running when we make change to our 
we need to install nodemon and make a little change from our package.json file

```
$ npm install --save-dev nodemon

```

open your package.json file and replace "script" with the following

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },

```
