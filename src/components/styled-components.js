import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';
import { colors } from '../tokens/colors';

export const StyledPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 150px 40px;
  min-height: 100vh;
  width: 100%;

  &.align-top {
    justify-content: flex-start;
  }

  &.details {
    h1, h2, p {
      margin-bottom: 40px;
    }

    & > p {
      font-size: 16px;
      text-align: center;
      max-width: 600px;
      line-height: 25px;
    }

  }
`;

export const SearchContainer = styled.div`
  align-items: ${(props) => (props.showResults ? 'flex-start' : 'center')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 10px;
  width: 100%;
`;

export const PageTitle = styled.h1`
  color: ${colors.black};
  margin: 0 0 10px;
`;

export const SubTitle = styled.p`
  margin-top: 0;
  text-align: center;
  line-height: 25px;
`;

export const ResultsInfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 100%;

  .select {
    width: 200px;
  }

  .Dropdown-control, .Dropdown-menu {
    border-radius: 8px;
  }
`;

export const ResultsLabel = styled.span`
  font-size: 14px;
  margin-bottom: 0;
`;

export const ResultsContainer = styled.div`
  align-items: flex-start;
  border-top: 1px solid ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResultItem = styled.div`
  margin-bottom: 40px;
  width: 70%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const RepoName = styled.h2`
  color: ${colors.coral};
  display: inline-block;
  margin-bottom: 15px;
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const InlineLabel = styled.span`
  font-weight: 600;
  margin-right: 5px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;

  p {
    font-size: 14px;
    margin: 0 5px 0 0;
  }
`;

export const SearchInputContainer = styled.div`
  margin: 0 0 10px;
  position: relative;
  width: 700px;
`;

export const SearchInput = styled.input`
  border: 1px solid ${colors.black};
  border-radius: 8px;
  height: 44px;
  outline: none;
  padding: 5px 20px;
  width: 100%;
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const HelperText = styled.span`
  color: ${colors.lightGrey};
  font-size: 12px;
  margin: 0 0 30px 5px;
`;

export const ErrorMessageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: crimson;

  p {
    color: white;
  }
`;

export const StarCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RepoStatsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Stat = styled.div`
  margin-right: 50px;

  &:last-of-type {
    margin-right: 0;
  }
`;
