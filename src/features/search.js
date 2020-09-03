import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { SearchBox } from '../components/search-box';
import { PageContainer } from '../components/page-container';
import { Results } from '../components/results';
import { SubSearchMenu } from '../components/sub-search-menu';
import { SearchContainer, HelperText } from '../components/styled-components';
import { ErrorMessage } from '../components/error-message';

import {
  fetchSearchResults,
  fetchFilteredSearchResults,
} from '../services/search';
import {
  buildUrl,
  calculatePageCount,
  getUrlSearchParams,
  appendUrlParams,
} from '../utils/general';

export const Search = () => {
  // Constants //
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialQualifiers = getUrlSearchParams(searchParams);
  const initialPage = searchParams.get('page') || 1;
  const DEFAULT_PAGE_VALUE = 1;

  // String Constants //
  const HELP_TEXT = 'Filter by language using a pipe (e.g \'example | java\')';
  const PLACEHOLDER = 'Search Repos...';

  // Local State //
  const [resultsData, setResultsData] = useState([]);
  const [itemCount, setItemCount] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [searchValue, setSearchValue] = useState(initialQualifiers);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [error, setError] = useState(null);
  const [selectValue, setSelectValue] = useState(null);

  // Callbacks //
  const updateValues = useCallback((totalCount, results) => {
    setItemCount(totalCount);
    setResultsData(results);
    setShowResults(true);
    setPageCount(calculatePageCount(totalCount));
  }, []);

  const handleFetch = useCallback(async (callback) => {
    try {
      setError(null);
      const data = await callback();
      const { results, totalCount } = data;
      updateValues(totalCount, results);
    } catch (err) {
      setError(err);
    }
  }, [updateValues]);

  const getSearchValues = (searchVal) => searchVal.split('|').map((item) => item.trim());

  const search = useCallback(async (searchVal, page, order) => {
    const searchValues = getSearchValues(searchVal);
    const searchTerm = searchValues[0];

    let urlParams = '';

    if (searchValue.length === 0) {
      return null;
    }

    if (searchValues.length > 1) {
      const lang = searchValues[1];
      urlParams = buildUrl(searchTerm, page, order, lang);
      handleFetch(() => fetchFilteredSearchResults(searchTerm, page, lang, order));
    } else {
      urlParams = buildUrl(searchTerm, page, order);
      handleFetch(() => fetchSearchResults(searchTerm, page, order));
    }

    return appendUrlParams(urlParams);
  }, [searchValue, handleFetch]);

  const initializePageData = useCallback(() => {
    search(initialQualifiers, initialPage);
  }, [search, initialQualifiers, initialPage]);

  const handleOnChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const handlePageChange = useCallback((selectedObject) => {
    const newCurrentPage = selectedObject.selected + 1;
    setCurrentPage(newCurrentPage);
    search(searchValue, newCurrentPage);
  }, [search, searchValue]);

  const handleNewSearch = useCallback(() => {
    setCurrentPage(DEFAULT_PAGE_VALUE);
    setSelectValue(undefined);
    search(searchValue, DEFAULT_PAGE_VALUE);
  }, [search, searchValue, setSelectValue]);

  // useEffects //
  useEffect(() => {
    initializePageData();
  }, [initializePageData]);

  useEffect(() => {
    if (!initialQualifiers) {
      window.location = '/';
      return null;
    }

    return () => { };
  }, [initialQualifiers]);

  // Helper Methods //
  const renderPagination = () => (!!((showResults && itemCount > 0)));
  const handleSelectChange = (selectedOption) => {
    setSelectValue(selectedOption.value);
    search(searchValue, currentPage, selectedOption.value);
  };

  return (
    <>
      <ErrorMessage error={error} />
      {showResults
        && (
          <PageContainer className="align-top">
            <SearchContainer showResults>
              <SearchBox
                placeholder={PLACEHOLDER}
                handleSearch={handleNewSearch}
                onChange={handleOnChange}
                value={searchValue}
                onClick={handleNewSearch}
              />
              <HelperText>{HELP_TEXT}</HelperText>
            </SearchContainer>
            <SubSearchMenu
              itemCount={itemCount}
              onSelectChange={handleSelectChange}
              value={selectValue}
            />
            <Results results={resultsData} itemCount={itemCount} />
            {renderPagination()
              && (
                <ReactPaginate
                  forcePage={currentPage - 1}
                  pageCount={pageCount}
                  pageRange={10}
                  marginPagesDisplayed={2}
                  onPageChange={handlePageChange}
                  containerClassName="container"
                  previousLinkClassName="page"
                  breakClassName="page"
                  nextLinkClassName="page"
                  pageClassName="page"
                  disabledClassNae="disabled"
                  activeClassName="active"
                />
              )}
          </PageContainer>
        )}
    </>
  );
};
