const axios = require('axios');

const baseURL = 'https://api.github.com/repositories';

const getRepoDetails = async (next, id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    const { data } = response;

    const {
      name,
      description,
      owner,
      stargazers_count, // eslint-disable-line camelcase
      forks,
    } = data;

    const _private = data.private;

    const { avatar_url } = owner; // eslint-disable-line camelcase

    const newObjectShape = {
      name,
      description,
      privateRepo: _private,
      avatar: avatar_url, // eslint-disable-line camelcase
      stars: stargazers_count, // eslint-disable-line camelcase
      forks,
    };

    const sucessResponse = {
      status: 200,
      details: newObjectShape,
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

module.exports = getRepoDetails;
