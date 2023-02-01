const faker = require("@faker-js/faker")

const generateMovie = () => {
  const title = faker.lorem.words();
  const year = faker.date.between("2017-01-01", "2020-12-31").getFullYear();
  const released = faker.date.between("2017-01-01", "2020-12-31").toLocaleDateString();
  const runtime = `${faker.random.number({ min: 90, max: 150 })} min`;
  const genre = faker.lorem.words();
  const director = faker.name.findName();
  const writer = faker.name.findName();
  const actors = `${faker.name.findName()}, ${faker.name.findName()}`;
  const description = faker.lorem.sentences();
  const country = `${faker.address.country()}, ${faker.address.country()}`;
  const metascore = faker.random.number({ min: 0, max: 100 });
  const rating = faker.random.number({ min: 0, max: 10, precision: 0.1 });
  const numberOfVotes = faker.random.number({ min: 1000, max: 100000 });
  const type = "movie";
  const revenue = faker.random.number({ min: 100000000, max: 1000000000 });
  const production = faker.company.companyName();

  return {
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    description,
    country,
    metascore,
    rating,
    numberOfVotes,
    type,
    revenue,
    production
  };
};

const movies = Array.from({ length: 40 }, () => generateMovie());
console.log(movies);
