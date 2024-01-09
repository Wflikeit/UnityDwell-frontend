import { usePublicationsQuery } from '../../api/PublicationApi.ts';
import { Skeleton, Stack } from '@mui/material';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import PublicationCard from './PublicationCard.tsx';
import React from 'react';

const PublicationsList: React.FC = () => {
  const { isLoading, isError, data } = usePublicationsQuery();
  const SkeletonHeight = 80;

  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
      </Stack>
    );
  }
  if (isError) {
    return <p>Error occurred please refresh the page</p>;
  }
  return (
    <>
      <Stack spacing={2}>
        {data?.map((publication) => (
          // <Collapsible component={<PublicationCard publication={publication} key={publication.id} />} />
          <PublicationCard publication={publication} key={publication.id} />
        ))}
        <AddNewPieceButton path="/publications" />
      </Stack>
    </>
  );
};

export default PublicationsList;
