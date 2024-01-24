import React, { useState } from 'react';
import { Avatar, Button, Card, CardHeader, Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box/Box';
import { format } from 'date-fns';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapsible from '../collapsible/Collapsible.tsx';
import Typography from '@mui/material/Typography/Typography';
import { CardItem } from '../../models/CardItem.ts';
import { CardFirstItem } from '../../models/CardFirstItem.ts';
import { grey } from '@mui/material/colors';

type RecordCardProps = {
  cardItems: CardItem[];
  cardFirstItem: CardFirstItem;
  collapisbleComp: React.JSX.Element;
  openDialogFunction: () => void;
};
const RecordCard = ({
                      cardFirstItem,
                      cardItems,
                      collapisbleComp,
                      openDialogFunction,
                    }: RecordCardProps): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Card sx={{ border: 'none', borderRadius: '1rem' }} variant="outlined">
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={3}>
          <Box>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'rgba(247, 247, 247, 1)' }}>
                  {cardFirstItem.icon}
                </Avatar>
              }
              title={cardFirstItem.text}
              titleTypographyProps={{ variant: 'h5' }}
              subheader={format(cardFirstItem.subtext, 'MMMM d, yyyy')}
              subheaderTypographyProps={{ variant: 'subtitle1' }}
            />
          </Box>
        </Grid>
        <Grid item xs={7} container justifyContent={'space-around'}>
          {cardItems?.map((item, index) => (
            <Grid item key={index}>
              <Stack direction="row" alignItems="center" gap={1}>
                {item.icon}
                <Typography variant="h6">{item.text}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            sx={{
              float: 'right',
              fontSize: 13,
              borderRadius: 28,
              backgroundColor: 'white',
              borderColor: grey[400],
              color: 'black',
              textTransform: 'none',
              fontWeight: 600,
            }}
            onClick={openDialogFunction}
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Avatar sx={{
            marginRight: '0.5rem',
            float: 'right',
            bgcolor: 'rgba(247, 247, 247, 0)', color: 'black', transition: '500ms', cursor: 'pointer',
            '&:hover': { bgcolor: grey[200] },
          }} onClick={toggle}
          >
            <ArrowDropDownIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Collapsible isOpen={open} component={collapisbleComp} />
    </Card>
  )
    ;
};

export default RecordCard;
