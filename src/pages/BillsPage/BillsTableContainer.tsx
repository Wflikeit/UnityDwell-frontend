import * as React from 'react';
import { Button, Skeleton, Stack } from '@mui/material';
import BillsTable from './BillsTable.tsx';
import { useBillsQuery } from '../../api/BillApi.ts';
import Typography from '@mui/material/Typography/Typography';

const BillsTableContainer: React.FC = () => {
  const { isLoading, isError, data } = useBillsQuery();
  const SkeletonHeight = 80;

  if (isError) {
    return (
      <Typography variant={'h3'} textAlign="center" margin="16rem">
        Unexpected error
      </Typography>
    );
  }
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
  return (
    <>
      <BillsTable data={data} />
      <section className="bills__button__container">
        <Button variant={'contained'} sx={{ backgroundColor: '#7870fd' }}>
          Add to All
        </Button>
        <Button variant={'contained'} sx={{ backgroundColor: '#7870fd' }}>
          Add{' '}
        </Button>
      </section>
    </>
  );
};

export default BillsTableContainer;
