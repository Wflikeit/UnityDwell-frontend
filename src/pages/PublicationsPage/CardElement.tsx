import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import { CardItem } from '../../models/CardItem.ts';

const CardElement = ({ icon, text }: CardItem) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {icon}
      <Typography variant="subtitle1">{text}</Typography>
    </Stack>
  );
};

export default CardElement;
