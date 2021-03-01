const { ApolloServer } = require('apollo-server-koa');

const { getUserId } = require('./helpers/auth');
const models = require('./models');
const { schema } = require('./graphql/schema');

const apolloServer = new ApolloServer({
  context: ({ req }) => ({
    ...req,
    models,
    userId: req && req.headers.authorization ? getUserId(req) : null,
  }),
  schema,
});

module.exports = { apolloServer };
