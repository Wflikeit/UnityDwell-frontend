import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { BillModel } from '../../models/Bill.ts';

type BillsTableProps = {
  data?: BillModel[];
};

const BillsTable: React.FC<BillsTableProps> = ({ data }) => {
  return data && data.length > 0 ? (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ maxHeight: '55dvh', minHeight: '50dvh' }}
    />
  ) : (
    <Typography variant={'h3'} textAlign="center" margin="16rem">
      {' '}
      Please add new bill first
    </Typography>
  );
};

export default BillsTable;

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 300,
    maxWidth: 300,
    minWidth: 50,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'title',
    headerName: 'Title',
    minWidth: 100,
    width: 130,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'flatOwnerPhoneNumber',
    headerName: 'Phone Number',
    minWidth: 100,
    width: 130,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 90,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'dateOfPublishing',
    headerName: 'Date',
    type: 'Date',
    width: 90,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: '   ',
    headerName: '',
    disableColumnMenu: true,
    disableReorder: true,
    disableExport: true,
    hideSortIcons: true,
    align: 'center',
    renderCell: (cellvalues) => {
      return (
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={(event) => {
            event.stopPropagation(); // Stop event propagation
            // handleClick(event, cellvalues);
          }}
        >
          Edit
        </Button>
      );
    },
  },
];
