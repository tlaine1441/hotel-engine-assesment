import React from 'react';
import { PropTypes } from 'prop-types';
import Select from 'react-dropdown';
import 'react-dropdown/style.css';
import { ResultsInfoWrapper, ResultsLabel } from './styled-components';

export const SubSearchMenu = ({ itemCount, onSelectChange, value }) => {
  const options = [
    { value: 'asc', label: 'Stars Accending' },
    { value: 'decs', label: 'Stars Decending' },
  ];

  return (
    <ResultsInfoWrapper>
      <ResultsLabel>{`${itemCount.toLocaleString()} results`}</ResultsLabel>
      <Select
        placeholder="Sort By"
        onChange={onSelectChange}
        className="select"
        menuColor="red"
        options={options}
        value={value}
      />
    </ResultsInfoWrapper>
  );
};

SubSearchMenu.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
