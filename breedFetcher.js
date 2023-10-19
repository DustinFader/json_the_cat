const request = require('request');
const { [0]:search, [1]:api="https://api.thecatapi.com/v1/breeds/search?" } = process.argv.splice(2);

const url = `${api}q=${search}`;
console.log(url, search);
request(url, (error, responce, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
  if (data.length === 0) {
    console.log('Breed Not Found');
  }
});