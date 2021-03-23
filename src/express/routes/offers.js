const {Router} = require(`express`);
const {
  emptyTicket,
  tickets,
  categories,
  pagination,
  actions,
  comments
} = require(`../mocks`);

const offersRouter = new Router();

offersRouter.get(`/add`, (req, res) => res.render(`pages/new-ticket`, {
  ticket: emptyTicket,
  categories,
  actions
}
));

offersRouter.get(`/edit/:id`, (req, res) => {
  res.render(`pages/ticket-edit`,
      {
        isLogged: true,
        categories,
        actions,
        ticket: tickets[0]
      });
}
);

offersRouter.get(`/category/:id`, (req, res) => {
  const currentCategory = categories.find((it) => it.name === req.params.id);
  if (currentCategory) {
    res.render(`pages/category`, {
      categories,
      currentCategory,
      tickets,
      pagination
    });
  } else {
    res.render(`pages/404`);
  }
});

offersRouter.get(`/:id`, (req, res) => {
  res.render(`pages/ticket`, {
    categories,
    comments,
    isLogged: true
  });
});

module.exports = offersRouter;
