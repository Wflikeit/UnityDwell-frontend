import * as React from 'react';
import { Button } from '@mui/material';
import BillsTable from './BillsTable.tsx';
import { useBillsQuery } from '../../api/BillApi.ts';

const BillsTableContainer: React.FC = () => {
  const { isLoading, isError, data } = useBillsQuery();
  if (isError){
    return <></>
  }
  if (isLoading){

  }
  return (
    <>
      <BillsTable data={data}/>
      <section className="bills__button__container">
        <Button> Upload Data</Button>
        <Button> Export to CSV</Button>
        <Button> Add to All</Button>
        <Button> Add </Button>
      </section>
    </>
  );
};

export default BillsTableContainer;
