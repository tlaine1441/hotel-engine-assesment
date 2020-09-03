import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledAvatar = styled.img`
  border-radius: 50%;
  margin: 60px 0 20px;
  height: 200px;
  width: 200px;
`;

export const Avatar = ({ src }) => (
  <StyledAvatar src={src} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};
