import React from 'react';
import { TextField, Typography } from '@mui/material';

interface DateFieldProps {
  name: string;
  title: string;
  formik: any;
}

const DateField: React.FC<DateFieldProps> = ({name, title, formik}) => {
  return (
    <>
      <Typography sx={{ fontSize: 12 }} variant="subtitle1">
        {title}
      </Typography>{' '}
      <TextField
        defaultValue={formik.values[name]}
        fullWidth
        type='date'
        variant="outlined"
          name={name}
        size="small"
        margin="none"
        InputProps={{
          style: { fontSize: '12px', width: '100%' },
        }}
        onChange={formik.handleChange}
        error={formik.errors[name] !== undefined}
      />
    </>
  )
}

export default DateField;