const {Router} = require(`express`);
const {
  categories,
  tickets,
  comments
} = require(`../mocks`);

const myRouter = new Router();

myRouter.get(`/`, (req, res) => res.render(`pages/my-tickets`, {
  tickets,
  categories
}));
myRouter.get(`/comments`, (req, res) => res.render(`pages/comments`, {comments}));

module.exports = myRouter;
