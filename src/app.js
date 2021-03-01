const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const dotenv = require('dotenv');

dotenv.config();

const router = require('./router');
const { apolloServer } = require('./apollo');
const database = require('./config/database');

const app = new Koa();

database();

apolloServer.applyMiddleware({ app });

app
  .use(helmet())
  .use(compress())
  .use(bodyParser({ enableTypes: ['json'] }))
  .use(router.routes());

module.exports = app;
