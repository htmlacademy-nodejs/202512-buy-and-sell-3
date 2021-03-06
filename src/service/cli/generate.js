const fs = require(`fs`).promises;
const {
  getRandomInt,
  shuffle
} = require(`../../utils`);
const chalk = require(`chalk`);


const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const ENCODING = `utf8`;
const FilePath = {
  SENTENCES: `./src/data/sentences.txt`,
  CATEGORIES: `./src/data/categories.txt`,
  TITLES: `./src/data/titles.txt`
};

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

/**
 * Возвращает наименование файла с фотографией
 * @param {number} numeric
 * @return {string}
 */
const getPicture = (numeric) => numeric > 10 ? `item${numeric}.jpg` : `item0${numeric}.jpg`;

/**
 * Генерирует моки предложений
 * @param {number} count
 * @param {string[]} titles
 * @param {string[]} sentences
 * @param {string[]} categories
 * @return {{description: string, sum: number, title: string, type: string, category: [string], picture: string}[]}
 */
const generateOffers = (count, titles, sentences, categories) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    picture: getPicture(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    description: shuffle(sentences).slice(1, 5).join(` `),
    type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    category: [categories[getRandomInt(0, categories.length - 1)]],
  }))
);

/**
 * Читает контент из текстового файла
 * @param {string} filePath
 * @return {string[]}
 */
const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, ENCODING);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffers = Number.parseInt(count, 10) || DEFAULT_COUNT;

    const [titles, sentences, categories] = await Promise.all([
      readContent(FilePath.TITLES),
      readContent(FilePath.SENTENCES),
      readContent(FilePath.CATEGORIES)
    ]);
    const content = JSON.stringify(generateOffers(countOffers, titles, sentences, categories));

    fs.writeFile(FILE_NAME, content)
      .then(() => console.info(chalk.green(`Operation success. File created`)),
          () => console.error(chalk.red(`Can't write data to file...`))
      );
  }
};
