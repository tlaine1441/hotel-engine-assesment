import React from 'react';
import { PropTypes } from 'prop-types';
import { ErrorMessageContainer } from './styled-components';

export const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <ErrorMessageContainer>
      <p>
        {error.status}
        {' '}
        {error.statusText}
      </p>
    </ErrorMessageContainer>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.instanceOf(Object).isRequired,
};
