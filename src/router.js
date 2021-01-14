const Router = require('koa-router');

const router = new Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = 'Ok!';
  ctx.status = 200;
});

module.exports = router;
