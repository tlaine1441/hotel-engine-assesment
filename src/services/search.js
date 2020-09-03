import * as request from './api';

const requestSearchResults = (searchTerm, page, order) => (
  request.get(`/search?term=${searchTerm}&page=${page}&order=${order}`)
);

const requestFilteredSearchResults = (searchTerm, page, lang, order) => (
  request.get(`/search?term=${searchTerm}&lang=${lang}&page=${page}&order=${order}`)
);

const requestRepoDetails = (id) => (
  request.get(`/search/${id}`)
);

export const fetchSearchResults = async (searchVal, pageNumber, order) => {
  try {
    const data = await requestSearchResults(searchVal, pageNumber, order);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchFilteredSearchResults = async (searchVal, pageNumber, lang, order) => {
  try {
    const data = await requestFilteredSearchResults(searchVal, pageNumber, lang, order);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fetchRepoDetails = async (id) => {
  try {
    const data = await requestRepoDetails(id);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};
