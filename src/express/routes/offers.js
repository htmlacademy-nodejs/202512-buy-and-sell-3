const {Router} = require(`express`);

const offersRouter = new Router();

offersRouter.get(`/add`, (req, res) => res.render(`pages/new-ticket`));
offersRouter.get(`/edit/:id`, (req, res) => res.render(`pages/ticket-edit`));
offersRouter.get(`/category/:id`, (req, res) => res.render(`pages/category`));
offersRouter.get(`/:id`, (req, res) => res.render(`pages/ticket`));

module.exports = offersRouter;
