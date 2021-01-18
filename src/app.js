const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');

const router = require('./router');
const { apolloServer } = require('./apollo');

const app = new Koa();

apolloServer.applyMiddleware({ app });

app
  .use(helmet())
  .use(compress())
  .use(bodyParser({ enableTypes: ['json'] }))
  .use(router.routes());

module.exports = app;
