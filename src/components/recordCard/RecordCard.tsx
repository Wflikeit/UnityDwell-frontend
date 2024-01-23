import React, { useState } from 'react';
import { Avatar, Button, Card, CardHeader, Stack } from '@mui/material';
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
const RecordCard = ({ cardFirstItem, cardItems, collapisbleComp, openDialogFunction }: RecordCardProps): React.JSX.Element => {
  // const path = `/publications/${publication.id}`;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Card sx={{ border: 'none' }} variant="outlined">
      {/*<CardActionArea sx={{ height: 80}} component={RouterLink} to={path}>*/}
      <Stack direction="row" alignItems="center">
        <Box>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'rgba(247, 247, 247, 1)', color: 'black' }}>
                {/*<PostAddIcon style={{ color: 'black' }} fontSize="large" />*/}
                {cardFirstItem.icon}
              </Avatar>
            }
            title={cardFirstItem.text}
            titleTypographyProps={{ variant: 'h5' }}
            subheader={format(cardFirstItem.subtext, 'MMMM d, yyyy')}
            subheaderTypographyProps={{ variant: 'subtitle1' }}
          />
        </Box>
        {cardItems?.map((item, index) => (
          <Stack direction="row" alignItems="center" gap={1} style={{ marginLeft: 'auto' }} key={index}>
            {item.icon}
            <Typography variant="h6">{item.text}</Typography>
          </Stack>
        ))}
        <Button
          variant="outlined"
          sx={{
            fontSize: 13,
            borderRadius: 28,
            backgroundColor: 'white',
            borderColor: grey[400],
            color: 'black',
            textTransform: 'none',
            fontWeight: 600,
            marginLeft: 'auto',
          }}
          onClick={openDialogFunction}
        >
          Edit
        </Button>
        <ArrowDropDownIcon onClick={toggle} style={{ marginLeft: 'auto' }} />
      </Stack>
      <Collapsible isOpen={open} component={collapisbleComp} />
    </Card>
  )
    ;
};

export default RecordCard;
