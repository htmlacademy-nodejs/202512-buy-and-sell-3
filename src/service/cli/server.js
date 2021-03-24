const chalk = require(`chalk`);
const express = require(`express`);
const mainRouter = require(`./routes/main`);

const DEFAULT_PORT = 3000;

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    const app = express();
    app.use(express.json());
    app.use(`/`, mainRouter);
    app.listen(DEFAULT_PORT, () => console.info(chalk.green(`Ожидаю соединений на ${port}`)));
  }
};
