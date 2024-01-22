import * as React from 'react';
import { Button } from '@mui/material';
import BillsTable from './BillsTable.tsx';

const BillsTableContainer: React.FC = () => {
  return (
    <>
      <BillsTable />
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
