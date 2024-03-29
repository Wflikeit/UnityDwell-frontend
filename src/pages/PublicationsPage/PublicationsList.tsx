import { usePublicationsQuery } from '../../api/PublicationApi.ts';
import { Skeleton, Stack } from '@mui/material';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import RecordCard from '../../components/recordCard/RecordCard.tsx';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PostAddIcon from '@mui/icons-material/PostAdd';
import React, { useState } from 'react';
import { PublicationModel } from '../../models/Publication.ts';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';
import { grey } from '@mui/material/colors';
import AddOrUpdatePublicationForm from '../../components/addOrUpdatePublicationForm/AddOrUpdatePublicationForm.tsx';

interface PublicationsListProps {
  housingAssociationId: string;
}

const PublicationsList: React.FC<PublicationsListProps> = ({ housingAssociationId }) => {
  const { isLoading, isError, data } = usePublicationsQuery();
  const SkeletonHeight = 80;
  const [open, setOpen] = useState(false);
  const [openedPublication, setOpenedPublication] = useState<PublicationModel>();
  const closeDialogFunction = () => {
    setOpen(false);
    setOpenedPublication(undefined);
  };
  const openDialogFunction = (publication: PublicationModel) => {
    setOpen(true);
    setOpenedPublication(publication);
  };
  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
        <Skeleton variant="rounded" height={SkeletonHeight} />
      </Stack>
    );
  }
  if (isError) {
    return <p>Error occurred please refresh the page</p>;
  }
  return (
    <>
      <AddNewPieceButton path="/publications" handleClick={() => {
        setOpen(true);
      }}
      />
      <Stack spacing={2} sx={{ marginTop: '2rem' }}>
        {data?.map((publication) => (
          // <Collapsible component={<RecordCard publication={publication} key={publication.id} />} />
          <RecordCard key={publication.id} sx={{ borderRadius: '5rem' }} cardFirstItem={{
            text: publication.title,
            subtext: publication.dateOfPublishing, icon: <PostAddIcon />,
          }} cardItems={[{ text: publication.dateOfPublishing, icon: <CalendarMonthIcon /> }]}
                      collapisbleComp={<p style={{
                        padding: '1rem',
                        backgroundColor: grey[200], borderRadius: '0.5rem',
                      }}
                                       >{publication.content}</p>}
                      openDialogFunction={() => openDialogFunction(publication)}
          />
        ))}
      </Stack>
      {open && (
        <AddOrEditModal closeDialogFunction={closeDialogFunction}
                        child={
                          <AddOrUpdatePublicationForm closeDialogFunction={closeDialogFunction}
                                                      housingAssociationId={housingAssociationId}
                                                      openedPublication={openedPublication}
                          />
                        }
                        title={openedPublication ? 'Edit publication' : 'Add new publication'}
        />)}
    </>
  );
};

export default PublicationsList;
