import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  Star,
  Network,
} from 'grommet-icons';
import {
  fetchRepoDetails,
} from '../services/search';
import { Avatar } from '../components/avatar';
import { PageContainer } from '../components/page-container';
import {
  StarCount,
  RepoStatsRow,
  Stat,
  PageTitle,
  Text,
} from '../components/styled-components';

export const Details = () => {
  // State //
  const [details, setDetails] = useState(null);

  // Params //
  const { slug } = useParams();

  // useEffects //
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchRepoDetails(slug);
      setDetails(response.details);
    };
    handleFetch();
  }, [slug]);

  // Prevent early rendering
  if (!details) {
    return null;
  }

  // Details
  const {
    name,
    description,
    privateRepo,
    avatar,
    stars,
    forks,
  } = details;

  return (
    <PageContainer className="details">
      <Avatar src={avatar} alt="Avatar" />
      <RepoStatsRow>
        <Stat>
          <StarCount>
            <Star />
            {' '}
            {stars}
          </StarCount>
        </Stat>
        <Stat>
          <StarCount>
            <Network />
            {forks}
          </StarCount>
        </Stat>
        <Stat>
          <span>{privateRepo ? 'Private' : 'Public'}</span>
        </Stat>
      </RepoStatsRow>
      <PageTitle>{name}</PageTitle>
      <Text>{description}</Text>
    </PageContainer>
  );
};
