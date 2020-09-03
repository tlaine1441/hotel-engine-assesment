const express = require('express');
const cors = require('cors');
const NodeCache = require('node-cache');
const getSearchResults = require('./search-results');
const getRepoDetails = require('./repo-details');

const cache = new NodeCache({
  stdTTL: 3600,
  checkperiod: (3600 * 0.5),
});

const app = express();
const port = 8081;

app.use(cors());

app.get('/search', async (req, res, next) => {
  const {
    term,
    page,
    lang,
    order,
  } = req.query;

  const currentParams = {
    term,
    page,
    lang,
    order,
  };

  const cachedParams = cache.get('searchParams', {
    term, page, lang, order,
  });
  const cachedSearchResults = cache.get('searchResults');

  if (cachedSearchResults && JSON.stringify(cachedParams) === JSON.stringify(currentParams)) {
    return res.send(JSON.stringify(cachedSearchResults));
  }

  try {
    const results = await getSearchResults(next, term, page, lang, order);
    cache.set('searchResults', results);
    cache.set('searchParams', currentParams);
    return res.send(JSON.stringify(results));
  } catch (err) {
    throw new Error('Error');
  }
});

app.get('/search/:id', async (req, res, next) => {
  const { id } = req.params;

  const cachedId = cache.get('id', id);
  const cachedDetails = cache.get('details');

  if (cachedDetails && JSON.stringify(cachedId) === JSON.stringify(id)) {
    return res.send(JSON.stringify(cachedDetails));
  }

  try {
    const results = await getRepoDetails(next, id);
    cache.set('details', results);
    cache.set('id', id);
    return res.send(JSON.stringify(results));
  } catch (err) {
    throw new Error('Error');
  }
});

app.use((err, _, res) => res.status(err.status).send(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); // eslint-disable-line no-console
});
