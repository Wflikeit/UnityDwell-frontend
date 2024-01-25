import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { BillModel } from '../../models/Bill.ts';
import { useState } from 'react';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';
import BillForm from '../../components/billForm/BillForm.tsx';

type BillsTableProps = {
  data?: BillModel[];
};

const BillsTable: React.FC<BillsTableProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const closeDialogFunction = () => {
    setOpen(false);
  };
  const openDialogFunction = () => {
    setOpen(true);
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
      renderCell: (cellValues) => {
        const handleClick = (event, cellValues) => {
          if (!open) {
            event.stopPropagation(); // Stop event propagation
            openDialogFunction(cellValues.row);
          }
        };

        return (
          <Button
            variant="contained"
            sx={{ backgroundColor: '#7870fd' }}
            onClick={(event) => handleClick(event, cellValues)}
          >
            Edit
            {open && (
              <AddOrEditModal
                housingAssociationId={cellValues.row.housingAssociation.id}
                closeDialogFunction={closeDialogFunction}
                title={'Add new Bill'}
              >
                <BillForm
                  housingAssociationId={cellValues.row.housingAssociation.id}
                  bill={cellValues.row}
                  closeDialogFunction={closeDialogFunction}
                />
              </AddOrEditModal>
            )}
          </Button>
        );
      },
    },
  ];

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
      sx={{ maxHeight: '55vh', minHeight: '50vh' }}
    />
  ) : (
    <Typography variant="h3" textAlign="center" marginTop="16rem">
      Please add new bill first
    </Typography>
  );
};

export default BillsTable;
