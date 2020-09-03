import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledPageContainer } from './styled-components';

export const PageContainer = ({ children, className }) => (
  <StyledPageContainer className={className}>
    {children}
  </StyledPageContainer>
);

PageContainer.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
};

PageContainer.defaultProps = {
  className: null,
};
