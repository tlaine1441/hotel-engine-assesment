import React, { useCallback, useState } from 'react';
import {
  SearchContainer,
  PageTitle,
  SubTitle,
} from '../components/styled-components';
import { PageContainer } from '../components/page-container';
import { SearchBox } from '../components/search-box';

export const Home = () => {
  // Local State //
  const [searchValue, setSearchValue] = useState('');

  // Constatns //
  const params = new URLSearchParams();

  // String Constants //
  const PAGE_TITLE = 'Github Repo Search';
  const SUB_TITLE = 'Search Tool To Find Relavent Repos';
  const PLACEHOLDER = 'Search Repos...';

  // Callbacks //
  const handleSearch = useCallback(() => {
    params.append('term', searchValue.toLowerCase());
    window.location = `/search?${params}`;
  }, [searchValue, params]);

  // Helper Methods //
  const handleOnChange = (e) => setSearchValue(e.target.value);

  return (
    <PageContainer>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <SubTitle>{SUB_TITLE}</SubTitle>
      <SearchContainer showResults={false}>
        <SearchBox
          placeholder={PLACEHOLDER}
          onChange={handleOnChange}
          value={searchValue}
          handleSearch={handleSearch}
        />
      </SearchContainer>
    </PageContainer>
  );
};
