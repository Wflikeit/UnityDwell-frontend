import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { BillModel } from '../../models/Bill.ts';
import { useState } from 'react';
import { BillModel } from '../../models/Publication.ts';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';

type BillsTableProps = {
  data?: BillModel[];
};

const BillsTable: React.FC<BillsTableProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [openedBill, setOpenedBill] = useState<BillModel>();
  const [toAddBill, setToAddBill] = useState<boolean>(false);
  const closeDialogFunction = () => {
    setOpen(false);
    setOpenedBill(undefined);
    setToAddBill(false);
  };
  const openDialogFunction = (bill: BillModel) => {
    setOpen(true);
    setOpenedBill(bill);
  };

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
            sx={{ backgroundColor: '#7870fd' }}
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation
              console.log(cellvalues);
              openDialogFunction(cellvalues.row);
              // handleClick(event, cellvalues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return data && data.length > 0 ? (
    <>
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
        sx={{ maxHeight: '55vh', minHeight: '50vh' }}
      />
      {open && (
        <AddOrEditModal
          housingAssociationId={data[0].housingAssociation.id}
          closeDialogFunction={closeDialogFunction}
          children={}
        />
      )}
    </>
  ) : (
    <Typography variant="h3" textAlign="center" marginTop="16rem">
      Please add new bill first
    </Typography>
  );
};

export default BillsTable;
