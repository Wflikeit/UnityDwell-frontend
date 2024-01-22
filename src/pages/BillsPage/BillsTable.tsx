import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const BillsTable: React.FC = () => {

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{maxHeight: '55dvh'}}
    />

  );
};

export default BillsTable;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 90,
  },
];

const rows = [
  { id: 1, title: 'Snow', firstName: 'Jon', amount: 35 },
  { id: 2, title: 'Lannister', firstName: 'Cersei', amount: 42 },
  { id: 3, title: 'Lannister', firstName: 'Jaime', amount: 45 },
  { id: 4, title: 'Stark', firstName: 'Arya', amount: 16 },
  { id: 5, title: 'Targaryen', firstName: 'Daenerys', amount: null },
  { id: 6, title: 'Melisandre', firstName: null, amount: 150 },
  { id: 7, title: 'Clifford', firstName: 'Ferrara', amount: 44 },
  { id: 8, title: 'Frances', firstName: 'Rossini', amount: 36 },
  { id: 9, title: 'Roxie', firstName: 'Harvey', amount: 65 },
];
