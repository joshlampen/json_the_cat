const request = require('request');

let breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Error: request failed... check url");
    process.exit();
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Error: breed not found");
    process.exit();
  }
  
  console.log(data[0].description);
});