import React from 'react';
import { AddressModel } from '../../models/Address.ts';
import { Grid, TextField, Typography } from '@mui/material';

interface AddressFormProps {
  address?: AddressModel;
  formik: any;
}

const AddressForm: React.FC<AddressFormProps> = ({ address, formik }) => {
  return (
    <>
      <Grid container sx={{ flexGrow: 1, justifyContent: 'space-around' }}>
        <Grid item xs={5}>
          <Typography variant="h5">
            Address:
          </Typography>
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={5}>
          <Typography sx={{ fontSize: 12, marginTop: '1rem' }} variant="subtitle1">
            City
          </Typography>
          <TextField
            disabled={address != null}
            defaultValue={formik.values.city}
            fullWidth
            variant="outlined"
            name="city"
            size="small"
            margin="none"
            InputProps={{
              style: { fontSize: '12px', width: '100%' },
            }}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ fontSize: 12, marginTop: '1rem' }} variant="subtitle1">
            Street
          </Typography>
          <TextField
            disabled={address != null}
            defaultValue={formik.values.street}
            fullWidth
            variant="outlined"
            name="street"
            size="small"
            margin="none"
            InputProps={{
              style: { fontSize: '12px', width: '100%' },
            }}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ fontSize: 12, marginTop: '1rem' }} variant="subtitle1">
            Postal code
          </Typography>
          <TextField
            disabled={address != null}
            defaultValue={formik.values.postalCode}
            fullWidth
            variant="outlined"
            name="postalCode"
            size="small"
            margin="none"
            InputProps={{
              style: {
                fontSize: '12px', width: '100%',
              },
            }}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={5} sx={{ marginBottom: '2rem' }}>
          <Typography sx={{ fontSize: 12, marginTop: '1rem' }} variant="subtitle1">
            Building number
          </Typography>
          <TextField
            disabled={address != null}
            defaultValue={formik.values.numberOfBuilding}
            fullWidth
            variant="outlined"
            name="buildingNumber"
            size="small"
            margin="none"
            InputProps={{
              style: {
                fontSize: '12px', width: '100%',
              },
            }}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;