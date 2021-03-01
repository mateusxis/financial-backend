const app = require('./app');

const port = process.env.PORT || 3000;

(() => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
