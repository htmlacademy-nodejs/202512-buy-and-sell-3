const categories = [
  {
    name: `home`,
    displayName: `Дом`,
    picture: `/img/cat.jpg`,
    quantity: 81
  },
  {
    name: `electronics`,
    displayName: `Электроника`,
    quantity: 62,
    picture: `/img/cat02.jpg`
  },
  {
    name: `clothing`,
    displayName: `Одежда`,
    picture: `/img/cat03.jpg`,
    quantity: 106
  },
  {
    name: `sport`,
    displayName: `Спорт/отдых`,
    picture: `/img/cat04.jpg`,
    quantity: 86
  },
  {
    name: `auto`,
    displayName: `Авто`,
    picture: `/img/cat05.jpg`,
    quantity: 34
  },
  {
    name: `books`,
    displayName: `Книги`,
    picture: `/img/cat06.jpg`,
    quantity: 92
  }
];

const tickets = [
  {
    title: `Куплю антиквариат.`,
    picture: `item01.jpg`,
    description: `Бонусом отдам все аксессуары. Мой дед не мог её сломать. Две страницы заляпаны свежим кофе. Это настоящая находка для коллекционера!`,
    type: `offer`,
    sum: 40353,
    category: [
      `Животные`
    ]
  },
  {
    title: `Продам советскую посуду. Почти не разбита.`,
    picture: `item05.jpg`,
    description: `Две страницы заляпаны свежим кофе. Кажется, что это хрупкая вещь. Мой дед не мог её сломать. Если найдёте дешевле — сброшу цену.`,
    type: `sale`,
    sum: 29858,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам отличную подборку фильмов на VHS.`,
    picture: `item11.jpg`,
    description: `При покупке с меня бесплатная доставка в черте города. Не пытайтесь торговаться. Цену вещам я знаю. Продаю с болью в сердце... Даю недельную гарантию.`,
    type: `offer`,
    sum: 92709,
    category: [
      `Разное`
    ]
  },
  {
    title: `Продам коллекцию журналов «Огонёк».`,
    picture: `item06.jpg`,
    description: `Это настоящая находка для коллекционера! Пользовались бережно и только по большим праздникам. Кому нужен этот новый телефон, если тут такое... Продаю с болью в сердце...`,
    type: `sale`,
    sum: 20125,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам отличную подборку фильмов на VHS.`,
    picture: `item01.jpg`,
    description: `Пользовались бережно и только по большим праздникам. Даю недельную гарантию. Это настоящая находка для коллекционера! Если товар не понравится — верну всё до последней копейки.`,
    type: `sale`,
    sum: 10077,
    category: [
      `Животные`
    ]
  },
  {
    title: `Куплю антиквариат.`,
    picture: `item01.jpg`,
    description: `Если найдёте дешевле — сброшу цену. Товар в отличном состоянии. Кажется, что это хрупкая вещь. Бонусом отдам все аксессуары.`,
    type: `offer`,
    sum: 21259,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам советскую посуду. Почти не разбита.`,
    picture: `item06.jpg`,
    description: `Если найдёте дешевле — сброшу цену. Если товар не понравится — верну всё до последней копейки. Продаю с болью в сердце... Кому нужен этот новый телефон, если тут такое...`,
    type: `offer`,
    sum: 49560,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам советскую посуду. Почти не разбита.`,
    picture: `item07.jpg`,
    description: `Это настоящая находка для коллекционера! При покупке с меня бесплатная доставка в черте города. Кому нужен этот новый телефон, если тут такое... Даю недельную гарантию.`,
    type: `offer`,
    sum: 63914,
    category: [
      `Посуда`
    ]
  },
  {
    title: `Куплю детские санки.`,
    picture: `item03.jpg`,
    description: `Бонусом отдам все аксессуары. Если найдёте дешевле — сброшу цену. Не пытайтесь торговаться. Цену вещам я знаю. Кажется, что это хрупкая вещь.`,
    type: `offer`,
    sum: 38726,
    category: [
      `Разное`
    ]
  },
  {
    title: `Продам советскую посуду. Почти не разбита.`,
    picture: `item07.jpg`,
    description: `Продаю с болью в сердце... Кому нужен этот новый телефон, если тут такое... Даю недельную гарантию. Бонусом отдам все аксессуары.`,
    type: `offer`,
    sum: 79213,
    category: [
      `Разное`
    ]
  },
  {
    title: `Куплю антиквариат.`,
    picture: `item13.jpg`,
    description: `Даю недельную гарантию. Бонусом отдам все аксессуары. Кому нужен этот новый телефон, если тут такое... Кажется, что это хрупкая вещь.`,
    type: `sale`,
    sum: 42618,
    category: [
      `Журналы`
    ]
  },
  {
    title: `Продам новую приставку Sony Playstation 5.`,
    picture: `item07.jpg`,
    description: `Две страницы заляпаны свежим кофе. При покупке с меня бесплатная доставка в черте города. Пользовались бережно и только по большим праздникам. Кому нужен этот новый телефон, если тут такое...`,
    type: `offer`,
    sum: 46693,
    category: [
      `Животные`
    ]
  },
  {
    title: `Продам коллекцию журналов «Огонёк».`,
    picture: `item16.jpg`,
    description: `Пользовались бережно и только по большим праздникам. Продаю с болью в сердце... Если найдёте дешевле — сброшу цену. Товар в отличном состоянии.`,
    type: `sale`,
    sum: 84069,
    category: [
      `Животные`
    ]
  },
  {
    title: `Продам новую приставку Sony Playstation 5.`,
    picture: `item01.jpg`,
    description: `Продаю с болью в сердце... Если товар не понравится — верну всё до последней копейки. Если найдёте дешевле — сброшу цену. Пользовались бережно и только по большим праздникам.`,
    type: `sale`,
    sum: 53334,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам советскую посуду. Почти не разбита.`,
    picture: `item12.jpg`,
    description: `Не пытайтесь торговаться. Цену вещам я знаю. Мой дед не мог её сломать. Две страницы заляпаны свежим кофе. Бонусом отдам все аксессуары.`,
    type: `offer`,
    sum: 55852,
    category: [
      `Журналы`
    ]
  },
  {
    title: `Продам новую приставку Sony Playstation 5.`,
    picture: `item06.jpg`,
    description: `Две страницы заляпаны свежим кофе. Это настоящая находка для коллекционера! Если товар не понравится — верну всё до последней копейки. Мой дед не мог её сломать.`,
    type: `sale`,
    sum: 53758,
    category: [
      `Разное`
    ]
  },
  {
    title: `Продам книги Стивена Кинга.`,
    picture: `item12.jpg`,
    description: `Не пытайтесь торговаться. Цену вещам я знаю. Кажется, что это хрупкая вещь. Если найдёте дешевле — сброшу цену. Товар в отличном состоянии.`,
    type: `offer`,
    sum: 35424,
    category: [
      `Журналы`
    ]
  },
  {
    title: `Продам отличную подборку фильмов на VHS.`,
    picture: `item06.jpg`,
    description: `Даю недельную гарантию. Бонусом отдам все аксессуары. Мой дед не мог её сломать. Продаю с болью в сердце...`,
    type: `sale`,
    sum: 81065,
    category: [
      `Книги`
    ]
  },
  {
    title: `Отдам в хорошие руки подшивку «Мурзилка».`,
    picture: `item11.jpg`,
    description: `Таких предложений больше нет! Если товар не понравится — верну всё до последней копейки. Кому нужен этот новый телефон, если тут такое... Бонусом отдам все аксессуары.`,
    type: `sale`,
    sum: 7449,
    category: [
      `Игры`
    ]
  },
  {
    title: `Отдам в хорошие руки подшивку «Мурзилка».`,
    picture: `item16.jpg`,
    description: `Даю недельную гарантию. Если товар не понравится — верну всё до последней копейки. Если найдёте дешевле — сброшу цену. Кажется, что это хрупкая вещь.`,
    type: `offer`,
    sum: 39263,
    category: [
      `Посуда`
    ]
  },
  {
    title: `Продам коллекцию журналов «Огонёк».`,
    picture: `item06.jpg`,
    description: `Продаю с болью в сердце... Это настоящая находка для коллекционера! Если найдёте дешевле — сброшу цену. Кому нужен этот новый телефон, если тут такое...`,
    type: `offer`,
    sum: 30100,
    category: [
      `Разное`
    ]
  },
  {
    title: `Продам книги Стивена Кинга.`,
    picture: `item08.jpg`,
    description: `Бонусом отдам все аксессуары. Товар в отличном состоянии. Пользовались бережно и только по большим праздникам. Мой дед не мог её сломать.`,
    type: `offer`,
    sum: 75599,
    category: [
      `Книги`
    ]
  },
  {
    title: `Продам новую приставку Sony Playstation 5.`,
    picture: `item13.jpg`,
    description: `Даю недельную гарантию. Кажется, что это хрупкая вещь. Продаю с болью в сердце... Мой дед не мог её сломать.`,
    type: `offer`,
    sum: 61405,
    category: [
      `Игры`
    ]
  },
  {
    title: `Продам книги Стивена Кинга.`,
    picture: `item03.jpg`,
    description: `Это настоящая находка для коллекционера! Даю недельную гарантию. Продаю с болью в сердце... Не пытайтесь торговаться. Цену вещам я знаю.`,
    type: `offer`,
    sum: 61682,
    category: [
      `Разное`
    ]
  },
  {
    title: `Продам отличную подборку фильмов на VHS.`,
    picture: `item04.jpg`,
    description: `Товар в отличном состоянии. При покупке с меня бесплатная доставка в черте города. Мой дед не мог её сломать. Если товар не понравится — верну всё до последней копейки.`,
    type: `offer`,
    sum: 47467,
    category: [
      `Посуда`
    ]
  }
];

const comments = [
  {
    author: {
      name: `Александр Бурый`,
      profile: `#`,
      picture: `/img/avatar03.jpg`
    },
    message: `А что с прогоном автомобиля? Также вижу на фото зимнюю резину. А летняя идет ли впридачу?`
  }
];

const emptyTicket = {
  title: ``,
  picture: ``,
  description: ``,
  type: ``,
  sum: null,
  category: []
};

const actions = [
  {
    name: `buy`,
    displayName: `Куплю`
  },
  {
    name: `sell`,
    displayName: `Продам`
  }
];

const pagination = {
  currentPage: 1,
  list: [
    {
      number: 1,
      url: `#`
    },
    {
      number: 2,
      url: `#`
    },
    {
      number: 3,
      url: `#`
    },
    {
      number: 4,
      url: `#`
    },
    {
      number: 5,
      url: `#`
    },
    {
      number: 6,
      url: `#`
    }
  ]
};

module.exports = {
  categories,
  tickets,
  comments,
  pagination,
  emptyTicket,
  actions
};