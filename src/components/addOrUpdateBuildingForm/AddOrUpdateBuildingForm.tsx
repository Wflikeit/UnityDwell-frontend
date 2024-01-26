import { BuildingModel } from '../../models/Building.ts';
import React from 'react';
import { useCreateBuildingMutation, useUpdateBuildingMutation } from '../../api/BuildingApi.ts';
import DialogContent from '@mui/material/DialogContent';
import { Box, CircularProgress, Grid, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Formik } from 'formik';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DateField from '../dateField/DateField.tsx';
import AddressForm from '../addressForm/AddressForm.tsx';

interface AddOrUpdateBuildingProps {
  openedBuilding?: BuildingModel;
  housingAssociationId: string;
  closeDialogFunction: () => void;
}

const NUMBER_OF_FLOORS_OPTIONS = [3, 4, 5, 6, 7, 8, 9, 10].map((numberOfFloors) => ({
  value: numberOfFloors,
  label: `${numberOfFloors} floors`,
}));

const AddOrUpdateBuildingForm: React.FC<AddOrUpdateBuildingProps> = ({
                                                                       openedBuilding,
                                                                       housingAssociationId,
                                                                       closeDialogFunction,
                                                                     }) => {
  const { mutate: createBuilding, isLoading } = useCreateBuildingMutation();
  const { mutate: updateBuilding } = useUpdateBuildingMutation();
  const onFormSubmit = ({
                          dateOfThermalModernization, dateOfCommissioning, dateOfMajorRenovation,
                          numberOfFloors, intendedForLiving, addressId, city, street,
                          postalCode, numberOfBuilding,
                        }, { resetForm }) => {
    console.log(openedBuilding);
    console.log(dateOfThermalModernization);
    console.log(dateOfCommissioning);
    console.log(dateOfMajorRenovation);
    console.log(numberOfFloors);
    console.log(addressId);
    console.log(city);
    console.log(street);
    console.log(postalCode);
    console.log(numberOfBuilding);
    openedBuilding &&
    updateBuilding({
        dateOfThermalModernization, dateOfCommissioning, dateOfMajorRenovation,
        numberOfFloors, intendedForLiving, housingAssociationId, id: openedBuilding.id, addressId, city, street,
        postalCode, numberOfBuilding,
      },
      {
        onSuccess: () => {
          closeDialogFunction();
          resetForm();
        },
        onError: () => {
          // SOMETHING
        },
      });
    !openedBuilding &&
    createBuilding(
      {
        dateOfThermalModernization, dateOfCommissioning, dateOfMajorRenovation,
        numberOfFloors, intendedForLiving, housingAssociationId, addressId, city, street,
        postalCode, numberOfBuilding,
      },
      {
        onSuccess: () => {
          closeDialogFunction();
          resetForm();
        },
        onError: () => {
          //SOMETHING
        },
      },
    );
  };
  return (<Formik
    initialValues={{
      dateOfThermalModernization: openedBuilding ? openedBuilding.dateOfThermalModernization : new Date(),
      dateOfCommissioning: openedBuilding ? openedBuilding.dateOfCommissioning : new Date(),
      dateOfMajorRenovation: openedBuilding ? openedBuilding.dateOfMajorRenovation : new Date(),
      numberOfFloors: openedBuilding ? openedBuilding.numberOfFloors : 3,
      intendedForLiving: openedBuilding && openedBuilding.intendedForLiving == 'T' ? 1 : 0,
      housingAssociationId: openedBuilding ? openedBuilding.housingAssociationId : '',
      addressId: openedBuilding ? openedBuilding.address.id : '',
      city: openedBuilding ? openedBuilding.address.city : '',
      street: openedBuilding ? openedBuilding.address.street : '',
      postalCode: openedBuilding ? openedBuilding.address.postalCode : '',
      numberOfBuilding: openedBuilding ? openedBuilding.address.numberOfBuilding : 1,
    }}
    onSubmit={({
                 dateOfThermalModernization, dateOfCommissioning, dateOfMajorRenovation,
                 numberOfFloors, intendedForLiving, addressId, city,
                 street, postalCode, numberOfBuilding,
               }, { resetForm }) => {
      onFormSubmit({
        dateOfThermalModernization, dateOfCommissioning, dateOfMajorRenovation,
        numberOfFloors, intendedForLiving, addressId, city, street, postalCode, numberOfBuilding,
      }, { resetForm });
    }}
  >
    {(formik) => (
      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers sx={{ overflowX: 'hidden', paddingBottom: '2rem' }}>
          <Box
            sx={{
              width: 550,
              height: 220,
              display: 'flex',
            }}
          >
            <Stack
              style={{ width: '100%' }}
              // direction="row"
              spacing={2}
            >
              <Grid container sx={{ flexGrow: 1, justifyContent: 'space-around' }}>
                <Grid item xs={5}>
                  <DateField title={'Date of thermal modernization'}
                             name={'dateOfThermalModernization'}
                             formik={formik}
                  />
                </Grid>
                <Grid item xs={5}>
                  <DateField title={'Date of commissioning'} name={'dateOfCommissioning'} formik={formik} />
                </Grid>
                <Grid item xs={5}>
                  <DateField name={'dateOfMajorRenovation'} title={'Date of major renovation'} formik={formik} />
                </Grid>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Number of floors
                  </Typography>{' '}
                  <TextField
                    defaultValue={formik.values.numberOfFloors}
                    fullWidth
                    select
                    variant="outlined"
                    name="numberOfFloors"
                    size="small"
                    margin="none"
                    InputProps={{
                      style: { fontSize: '12px', width: '100%' },
                      startAdornment: (
                        <InputAdornment position="start">
                          <MeetingRoomIcon style={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                    onChange={formik.handleChange}
                  >
                    {NUMBER_OF_FLOORS_OPTIONS.map((number) => (
                      <MenuItem key={number.value} value={number.value} sx={{ fontSize: '12px' }}>
                        {number.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 12 }} variant="subtitle1">
                    Intended for living
                  </Typography>{' '}
                  <TextField
                    defaultValue={formik.values.intendedForLiving}
                    fullWidth
                    select
                    variant="outlined"
                    name="intendedForLiving"
                    size="small"
                    margin="none"
                    InputProps={{
                      style: { fontSize: '12px', width: '100%' },
                      startAdornment: (
                        <InputAdornment position="start">
                          <QuestionMarkIcon style={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={0} sx={{ fontSize: '12px' }}>
                      No
                    </MenuItem>
                    <MenuItem value={1} sx={{ fontSize: '12px' }}>
                      Yes
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={5} />
              </Grid>
              <AddressForm address={openedBuilding?.address} formik={formik} />
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
            disabled={!formik.values.dateOfCommissioning || !formik.values.dateOfThermalModernization
              || !formik.values.dateOfCommissioning || !formik.values.city || !formik.values.street
              || !formik.values.postalCode || !formik.values.numberOfBuilding}
            startIcon={isLoading ? <CircularProgress color="inherit" size={18} /> : null}
          >
            {openedBuilding ? 'Update building' : 'Add building'}
          </Button>
        </DialogActions>
      </form>
    )}
  </Formik>);
};

export default AddOrUpdateBuildingForm;