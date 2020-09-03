const axios = require('axios');

const baseSearchURL = 'https://api.github.com/search/repositories';

const getSearchResults = async (next, searchTerm, page, lang, order) => {
  try {
    const response = await axios.get(`${baseSearchURL}?q=${searchTerm}+language:${lang}&page=${page}&sort=stars&order=${order}&per_page=50`);
    const { data } = response;

    const { total_count, items } = data; // eslint-disable-line camelcase

    const mapItems = items.map((item) => {
      const {
        id,
        name,
        owner,
        description,
        stargazers_count, // eslint-disable-line camelcase
        score,
        language,
      } = item;

      const newObjectShape = {
        id,
        name,
        owner: owner.login,
        description,
        stars: stargazers_count, // eslint-disable-line camelcase
        score,
        language,
      };

      return newObjectShape;
    });

    const sucessResponse = {
      status: 200,
      totalCount: total_count, // eslint-disable-line camelcase
      results: mapItems,
    };

    return sucessResponse;
  } catch (err) {
    const {
      status,
      statusText,
    } = err.response;

    const errorResponse = {
      status,
      statusText,
    };

    return next(errorResponse);
  }
};

module.exports = getSearchResults;
