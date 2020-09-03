import React from 'react';
import { PropTypes } from 'prop-types';
import { ResultsContainer } from './styled-components';
import { Result } from './result';

export const Results = ({ results, itemCount }) => {
  const mappedResults = results.map((result) => (
    <Result key={result.id} result={result} />
  ));

  return (
    <ResultsContainer>
      {itemCount > 0 && mappedResults}
      {itemCount === 0 && (
        <h3>No Results Found</h3>
      )}
    </ResultsContainer>
  );
};

Results.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
  itemCount: PropTypes.number.isRequired,
};
