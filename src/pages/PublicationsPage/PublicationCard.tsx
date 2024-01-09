import React, { useState } from 'react';
import { Avatar, Card, CardHeader, Stack } from '@mui/material';
import Box from '@mui/material/Box/Box';
import { PublicationModel } from '../../models/Publication.ts';
import { format } from 'date-fns';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type PublicationCardProps = {
  publication: PublicationModel;
};
const PublicationCard = ({ publication }: PublicationCardProps): React.JSX.Element => {
  // const path = `/publications/${publication.id}`;
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <Card sx={{ border: 'none', display: 'grid' }} variant="outlined" >
      {/*<CardActionArea sx={{ height: 80}} component={RouterLink} to={path}>*/}
      <Stack direction="row" alignItems="center" justifyContent="flex-start" height="100%" sx={{ gridRow: 1 }}>
        <Box sx={{width:500}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'rgba(247, 247, 247, 1)' }}>
                {/*<Apartment style={{ color: 'black' }} fontSize="large" />*/}
              </Avatar>
            }
            title={publication.title}
            titleTypographyProps={{ variant: 'h5' }}
            subheader={format(publication.dateOfPublishing, 'MMMM d, yyyy')}
            subheaderTypographyProps={{ variant: 'subtitle1' }}
          />
        </Box>
        <ArrowDropDownIcon onClick={toggle}/>
        {/*<CardElement icon=<MeetingRoomIcon/> text={`${publication.idOfHousingAssociation} rooms`} />*/}
        {/*<CardElement icon=<PeopleIcon /> text={`${publication.numberOfGuests} guests`} />*/}
      </Stack>
      {/*</CardActionArea>*/}
      {open && <textarea>{publication.content}</textarea>}
    </Card>
  );
};

export default PublicationCard;
