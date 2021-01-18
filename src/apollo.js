const { ApolloServer } = require('apollo-server-koa');

const { getUserId } = require('./helpers/auth');
const { prisma } = require('./graphql/context');
const { schema } = require('./graphql/schema');

const apolloServer = new ApolloServer({
  context: ({ req }) => ({
    ...req,
    prisma,
    userId:
    req && req.headers.authorization
      ? getUserId(req)
      : null,
  }),
  schema,
});

module.exports = { apolloServer };
