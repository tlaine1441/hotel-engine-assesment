export const buildUrl = (searchTerm, page, order, lang) => {
  let newUrlState = `?term=${searchTerm}&page=${page}`;
  newUrlState = lang ? `${newUrlState}&lang=${lang}` : newUrlState;
  newUrlState = order ? `${newUrlState}&order=${order}` : newUrlState;
  return newUrlState;
};

export const calculatePageCount = (totalCount) => {
  const maxApiResults = 1000;
  const resultPerPage = 50;
  const totalPages = Math.ceil(totalCount / resultPerPage);
  const maxPages = maxApiResults / resultPerPage;
  const resultsInRange = totalCount <= maxApiResults;
  return resultsInRange ? totalPages : maxPages;
};

export const getUrlSearchParams = (searchParams) => {
  const langParam = searchParams.get('lang');

  if (langParam) {
    return `${searchParams.get('term')} | ${searchParams.get('lang')}`;
  }

  return searchParams.get('term');
};

export const appendUrlParams = (urlParams) => window.history.pushState({}, '', urlParams);
