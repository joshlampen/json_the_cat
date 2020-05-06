const request = require('request');

let breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  console.log(data[0].description);
});