import React from 'react';
import { Formik } from 'formik';
import DialogContent from '@mui/material/DialogContent';
import { Autocomplete, Box, Chip, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useBillTitlesQuery, useCreateBillMutation, useUpdateBillMutation } from '../../api/BillApi.ts';
import { BillModel } from '../../models/Bill.ts';

interface BillFormProps {
  bill?: BillModel;
  housingAssociationId: string;
  closeDialogFunction: () => void;
}

interface BillFormValuesProps {
  amount: number;
  title: string;
  flatOwnerPhoneNumber: string;
}

const BillForm: React.FC<BillFormProps> = ({ bill, closeDialogFunction }) => {
  const validateFields = (values: BillFormValuesProps) => {
    const errors: any = {};
    const trimmedTitleValue = values.amount.toString().trim();
    if (trimmedTitleValue.length === 0) {
      errors.title = 'Amount is required';
    }

    return errors;
  };
  const { data, isError } = useBillTitlesQuery();
  const titleList = data;
  // const { mutate: createPublication, isLoading, error } = useCreateBillMutation();
  const { mutate: updateBill } = useUpdateBillMutation();
  const onFormSubmit = ({ amount, title, flatOwnerPhoneNumber, housingAssociationId }, { resetForm }) => {
    bill && console.log({ amount, title, flatOwnerPhoneNumber, housingAssociationId });
    updateBill(
      {
        title,
        housingAssociationId,
        amount,
        flatOwnerPhoneNumber,
        billId: bill.id,
        dateOfPublishing: new Date(),
      },
      {
        onSuccess: () => {
          closeDialogFunction();
          resetForm();
          // SOMETHING
        },
        onError: () => {
          // SOMETHING
          // showSnackbarAlert({ alertMessage: 'An error occured. Please, try again!', severityLevel: 'error' });
        },
      }
    );
    // !bill &&
    //   createPublication(
    //     { title, housingAssociationId, amount, flatOwnerPhoneNumber },
    //     {
    //       onSuccess: () => {
    //         closeDialogFunction();
    //         resetForm();
    //         // SOMETHING
    //       },
    //       onError: () => {
    //         // SOMETHING
    //       },
    //     }
    //   );
  };

  return !isError ? (
    <Formik
      validate={validateFields}
      initialValues={{
        title: bill ? bill.title : '',
        amount: bill ? bill.amount : 0,
        flatOwnerPhoneNumber: bill ? bill.flatOwnerPhoneNumber : '',
        housingAssociationId: bill ? bill.housingAssociation.id : '',
      }}
      onSubmit={({ title, amount, flatOwnerPhoneNumber, housingAssociationId }, { resetForm }) => {
        onFormSubmit({ title, amount, flatOwnerPhoneNumber, housingAssociationId }, { resetForm });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <DialogContent dividers>
            <Box
              sx={{
                width: 550,
                height: 220,
                display: 'flex',
              }}
            >
              <Stack
                style={{ width: '100%' }}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Flat Owner Phone Number
                  </Typography>
                  <Autocomplete
                    options={titleList ? titleList.map((option) => option.title) : []}
                    renderInput={(params) => <TextField {...params} />}
                    size="small"
                    fullWidth
                    onChange={formik.handleChange}
                  />
                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Title
                  </Typography>
                  <Autocomplete
                    options={titleList ? titleList.map((option) => option.title) : []}
                    renderInput={(params) => <TextField {...params} />}
                    size="small"
                    fullWidth
                    onChange={formik.handleChange}
                  />

                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Amount
                  </Typography>
                  <TextField
                    defaultValue={formik.values.amount}
                    fullWidth
                    variant="outlined"
                    name="amoung"
                    size="small"
                    margin="none"
                    InputProps={{
                      style: { fontSize: '12px', width: '100%' },
                    }}
                    onChange={formik.handleChange}
                  >
                    (// Temporary)
                  </TextField>
                  {formik.errors.amount && formik.touched.amount && (
                    <Chip
                      sx={{ fontSize: 12, marginTop: '10px' }}
                      label="'Title' is required field."
                      color="error"
                      variant="outlined"
                    />
                  )}
                  {/*{error ? (*/}
                  {/*  <Chip*/}
                  {/*    sx={{ fontSize: 12, marginTop: '10px' }}*/}
                  {/*    label="An unexpected error occured. Please, try again."*/}
                  {/*    color="error"*/}
                  {/*    variant="outlined"*/}
                  {/*  />*/}
                  {/*) : null}*/}
                </Box>
              </Stack>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              sx={{
                fontSize: 12,
                borderRadius: 28,
                backgroundColor: 'white',
                borderColor: grey[400],
                color: 'black',
                textTransform: 'none',
                fontWeight: 600,
              }}
              onClick={closeDialogFunction}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disableElevation={true}
              sx={{
                fontSize: 12,
                borderRadius: 28,
                backgroundColor: 'black',
                textTransform: 'none',
                fontWeight: 600,
                borderColor: grey[400],
              }}
              type="submit"
              disabled={!formik.values.amount}
              // startIcon={isLoading ? <CircularProgress color="inherit" size={18} /> : null}
            >
              {bill ? 'Update Bill' : 'Add Bill'}
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  ) : (
    <Typography variant="h3" textAlign="center" marginTop="16rem">
      Please add new bill first
    </Typography>
  );
};

export default BillForm;
