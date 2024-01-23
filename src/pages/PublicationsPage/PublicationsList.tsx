import { usePublicationsQuery } from '../../api/PublicationApi.ts';
import { Skeleton, Stack } from '@mui/material';
// import { Stack } from '@mui/material';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import RecordCard from '../../components/recordCard/RecordCard.tsx';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PostAddIcon from '@mui/icons-material/PostAdd';
import React, { useState } from 'react';
import { PublicationModel } from '../../models/Publication.ts';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';

interface PublicationsListProps {
  housingAssociationId?: string;
}

const PublicationsList: React.FC<PublicationsListProps> = ({ housingAssociationId }) => {
  const { isLoading, isError, data } = usePublicationsQuery();
  const SkeletonHeight = 80;
  // const publication = {
  //   id: "b4c574bd-d8b2-4f4a-aada-4ddee3ce1afc",
  //   content: "jebackomandosa",
  //   title: "tytul",
  //   dateOfPublishing: new Date(),
  //   idOfHousingAssociation: "04678797-6435-45d1-a748-770b33a1917b"
  // }
  // const data = [publication];
  const [open, setOpen] = useState(false);
  const [openedPublication, setOpenedPublication] = useState<PublicationModel>();
  const [toAddPublication, setToAddPublication] = useState<boolean>(false);
  const closeDialogFunction = () => {
    setOpen(false);
    setOpenedPublication(undefined);
    setToAddPublication(false);
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
      <Stack spacing={2}>
        {data?.map((publication) => (
          // <Collapsible component={<RecordCard publication={publication} key={publication.id} />} />
          <RecordCard key={publication.id} cardFirstItem={{
            text: publication.title,
            subtext: publication.dateOfPublishing, icon: <PostAddIcon />,
          }} cardItems={[{ text: publication.dateOfPublishing, icon: <CalendarMonthIcon /> }]}
                      collapisbleComp={<p>{publication.content}</p>}
                      openDialogFunction={() => openDialogFunction(publication)} />
        ))}
      </Stack>
      <AddNewPieceButton path="/publications" handleClick={() => {
        setToAddPublication(true);
        setOpen(true);
      }} />
      {open && (
        <AddOrEditModal closeDialogFunction={closeDialogFunction} housingAssociationId={housingAssociationId ?? ''}
                        openedPublication={openedPublication} addPublication={toAddPublication}/>)}
    </>
  );
};

export default PublicationsList;
