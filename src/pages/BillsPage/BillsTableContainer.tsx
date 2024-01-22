import * as React from 'react';
import BillTable from './BillTable.tsx';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import { Button } from '@mui/material';

const BillsTableContainer: React.FC = () => {
  return (
    <>
      <BillTable />
      <section className={'bills__button__container'}>
        <Button> Upload Data</Button>
        <Button> Export to CSV</Button>
        <Button> Add to All</Button>
        <Button> Add </Button>
      </section>
    </>
  );
};

export default BillsTableContainer;
