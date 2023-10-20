const {fetchBreedDescription} = require('./breedFetcher');

const { [0]:breedName, [1]:api = "https://api.thecatapi.com/v1/breeds/search?q=" } = process.argv.splice(2);
// const url = `${api}${breedName}`;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  }
  console.log(desc);
});