import React, { useCallback } from 'react';
import {
  Search,
} from 'grommet-icons';
import { PropTypes } from 'prop-types';
import {
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from './styled-components';
import {
  colors,
} from '../tokens/colors';

export const SearchBox = ({
  placeholder, handleSearch, onChange, value,
}) => {
  // Constants //
  const enterKeyCode = 13;

  // Callbacks //
  const handleOnClick = useCallback(() => (
    (value.length > 0) ? handleSearch(value) : null
  ), [handleSearch, value]);

  const handleKeyUp = useCallback((e) => (
    (e.charCode === enterKeyCode) && (value.length > 0) ? handleSearch(value) : null
  ), [handleSearch, value]);

  return (
    <SearchInputContainer>
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyUp}
      />
      <SearchButton>
        <Search onClick={handleOnClick} color={colors.coral} />
      </SearchButton>
    </SearchInputContainer>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

SearchBox.defaultProps = {
  placeholder: '',
};
