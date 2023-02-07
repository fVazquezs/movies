const {faker} = require("@faker-js/faker")
const fs = require('fs');


const generateMovie = () => {

  const title = faker.lorem.words();
  const year = faker.date.between("2017-01-01", "2020-12-31").getFullYear();
  const released = faker.date.between("2017-01-01", "2020-12-31").toLocaleDateString();
  const runtime = `${faker.random.numeric(2, { bannedDigits: ['0'] })} mins`;
  const genre = faker.lorem.words();
  const director = faker.name.fullName();
  const writer = faker.name.fullName();
  const actors = `${faker.name.fullName()}, ${faker.name.fullName()}`;
  const description = faker.lorem.sentences();
  const country = `${faker.address.country()}, ${faker.address.country()}`;
  const metascore = parseInt(faker.random.numeric(2));
  const rating = faker.random.numeric(1, { bannedDigits: ['0'] });
  const numberOfVotes = parseInt(faker.random.numeric(faker.random.numeric(1), { bannedDigits: ['0'] }));
  const type = "movie";
  const revenue = parseInt(faker.random.numeric(faker.random.numeric(1), { bannedDigits: ['0'] }));
  const production = faker.company.name();

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

const movies = Array.from({ length: 300 }, () => generateMovie());
fs.writeFileSync('./movies.json',JSON.stringify(movies));
