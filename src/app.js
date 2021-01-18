const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');

const router = require('./router');

const app = new Koa();

app
  .use(helmet())
  .use(compress())
  .use(bodyParser({ enableTypes: ['json'] }))
  .use(router.routes());

module.exports = app;
