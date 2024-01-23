import { usePublicationsQuery } from '../../api/PublicationApi.ts';
import { Skeleton, Stack } from '@mui/material';
// import { Stack } from '@mui/material';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import RecordCard from '../../components/recordCard/RecordCard.tsx';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PostAddIcon from '@mui/icons-material/PostAdd';
import React from 'react';

const PublicationsList: React.FC = () => {
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
            subtext: publication.dateOfPublishing, icon: <PostAddIcon/>,
          }} cardItems={[{text: publication.dateOfPublishing, icon: <CalendarMonthIcon />}]}
                      collapisbleComp={<textarea>{publication.content}</textarea>}
          />
        ))}
        <AddNewPieceButton path="/publications" />
      </Stack>
    </>
  );
};

export default PublicationsList;
