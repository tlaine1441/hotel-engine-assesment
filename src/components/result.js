import React from 'react';
import {
  Star,
} from 'grommet-icons';
import { PropTypes } from 'prop-types';
import {
  ResultItem,
  StyledLink,
  RepoName,
  InlineLabel,
  Text,
  Row,
  RowItem,
} from './styled-components';

export const Result = ({ result }) => {
  const AUTHOR = 'Author:';
  const NO_DESCRIPTION = 'No Description';
  const NO_LANGUAGE_DETECTED = 'No Language Detected';

  const {
    id,
    name,
    owner,
    description,
    stars,
    language,
  } = result;

  const detailLink = `/details/${id}`;

  return (
    <ResultItem>
      <StyledLink to={detailLink}>
        <RepoName>{name}</RepoName>
      </StyledLink>
      <Text>
        <InlineLabel>{AUTHOR}</InlineLabel>
        {owner}
      </Text>
      <Text>{description || NO_DESCRIPTION}</Text>
      <Row>
        <RowItem>
          <Text>
            <span><Star /></span>
            {stars}
          </Text>
        </RowItem>
        <RowItem>
          <Text>{language || NO_LANGUAGE_DETECTED}</Text>
        </RowItem>
      </Row>
    </ResultItem>
  );
};

Result.propTypes = {
  result: PropTypes.instanceOf(Object).isRequired,
};
