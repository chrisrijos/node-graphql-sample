const express = require('express'),
      express_graphql = require('express-graphql'),
      app = express();

var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
      message: String
    }
`);

var root = {
  message: () => 'Hello World!'
};

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => { console.log('App listening on 4000')});
