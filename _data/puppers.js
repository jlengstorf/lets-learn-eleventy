const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://dog.ceo/api/breeds/image/random');

  return result.data.message;
};
