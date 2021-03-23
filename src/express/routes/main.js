const {Router} = require(`express`);
const {
  tickets,
  categories
} = require(`../mocks`);

const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.render(`pages/main`, {
  tickets,
  categories
}));
mainRouter.get(`/register`, (req, res) => res.render(`pages/sign-up`));
mainRouter.get(`/login`, (req, res) => res.render(`pages/login`));
mainRouter.get(`/search`, (req, res) => res.render(`pages/search-result`));

module.exports = mainRouter;
