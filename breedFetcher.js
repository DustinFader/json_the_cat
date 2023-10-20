const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, responce, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'Breed Not Found');
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};