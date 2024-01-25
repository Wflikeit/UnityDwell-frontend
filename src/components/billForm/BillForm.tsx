import React from 'react';
import { Formik } from 'formik';
import DialogContent from '@mui/material/DialogContent';
import { Box, Chip, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { BillModel } from '../../models/Publication.ts';
import { useCreatePublicationMutation, useUpdatePublicationMutation } from '../../api/PublicationApi.ts';

interface BillFormProps {
  bill?: BillModel;
  housingAssociationId: string;
  closeDialogFunction: () => void;
}

interface BillFormValuesProps {
  title: string;
  content: string;
}

const BillForm: React.FC<BillFormProps> = ({ bill, housingAssociationId, closeDialogFunction }) => {
  const validateFields = (values: BillFormValuesProps) => {
    const errors: any = {};
    const trimmedTitleValue = values.title.trim();
    const trimmedContentValue = values.content.trim();
    if (trimmedTitleValue.length === 0) {
      errors.title = 'Title is required';
    }
    if (trimmedContentValue.length === 0) {
      errors.content = 'Content is required';
    }
    return errors;
  };
  const { mutate: createPublication, isLoading, error } = useCreatePublicationMutation();
  const { mutate: updatePublication } = useUpdatePublicationMutation();
  const onFormSubmit = ({ title, content }, { resetForm }) => {
    bill &&
      updatePublication(
        { title, content, housingAssociationId, publicationId: bill.id },
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
    !bill &&
      createPublication(
        { title, content, housingAssociationId },
        {
          onSuccess: () => {
            closeDialogFunction();
            resetForm();
            // SOMETHING
          },
          onError: () => {
            // SOMETHING
          },
        }
      );
  };
  return (
    <Formik
      validate={validateFields}
      initialValues={{
        title: bill ? bill.title : '',
        content: bill ? bill.content : '',
      }}
      onSubmit={({ title, content }, { resetForm }) => {
        onFormSubmit({ title, content }, { resetForm });
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
                    Title
                  </Typography>
                  <TextField
                    defaultValue={formik.values.title}
                    inputProps={{ style: { fontSize: '12px' } }}
                    type="text"
                    variant="outlined"
                    name="title"
                    margin="none"
                    size="small"
                    fullWidth
                    onChange={formik.handleChange}
                    error={formik.errors.title !== undefined}
                  />
                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Content
                  </Typography>{' '}
                  <TextField
                    defaultValue={formik.values.content}
                    fullWidth
                    variant="outlined"
                    name="content"
                    size="small"
                    margin="none"
                    InputProps={{
                      style: { fontSize: '12px', width: '100%' },
                    }}
                    onChange={formik.handleChange}
                  >
                    (// Temporary)
                  </TextField>
                  {formik.errors.title && formik.touched.title && (
                    <Chip
                      sx={{ fontSize: 12, marginTop: '10px' }}
                      label="'Title' is required field."
                      color="error"
                      variant="outlined"
                    />
                  )}
                  {error ? (
                    <Chip
                      sx={{ fontSize: 12, marginTop: '10px' }}
                      label="An error occured. Please, try again."
                      color="error"
                      variant="outlined"
                    />
                  ) : null}
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
              disabled={!formik.values.title || !formik.values.content}
              startIcon={isLoading ? <CircularProgress color="inherit" size={18} /> : null}
            >
              {bill ? 'Update Bill' : 'Add Bill'}
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};

export default BillForm;
