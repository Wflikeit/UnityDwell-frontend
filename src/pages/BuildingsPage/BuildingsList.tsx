import React, { useState } from 'react';
import { useBuildingsQuery } from '../../api/BuildingApi.ts';
import { BuildingModel } from '../../models/Building.ts';
import { Skeleton, Stack } from '@mui/material';
import RecordCard from '../../components/recordCard/RecordCard.tsx';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';
import BuildingDetails from './BuildingDetails.tsx';


interface BuildingsListProps {
  housingAssociationId?: string;
}

const BuildingsList: React.FC<BuildingsListProps> = ({ housingAssociationId }) => {
  const { isLoading, isError, data } = useBuildingsQuery();
  const SkeletonHeight = 80;
  const [open, setOpen] = useState(false);
  const [openedBuilding, setOpenedBuilding] = useState<BuildingModel>();
  const [toAddBuilding, setToAddBuilding] = useState<boolean>(false);
  const closeDialogFunction = () => {
    setOpen(false);
    setOpenedBuilding(undefined);
    setToAddBuilding(false);
  };
  const openDialogFunction = (building: BuildingModel) => {
    setOpen(true);
    setOpenedBuilding(building);
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
        {data?.map((building) => (
          // <Collapsible component={<RecordCard publication={publication} key={publication.id} />} />
          <RecordCard key={building.id} cardFirstItem={{
            text: '',
            subtext: `${building.address.city} ${building.address.street}
            , ${building.address.numberOfBuilding}, ${building.address.postalCode}`, icon: <ApartmentIcon />,
          }} cardItems={[{ text: '4 flats', icon: <MeetingRoomIcon /> },
            { text: `${building.numberOfFloors} floors`, icon: <ApartmentIcon /> }]}
                      collapisbleComp={<BuildingDetails building={building} />}
                      openDialogFunction={() => openDialogFunction(building)}
          />
        ))}
      </Stack>
      <AddNewPieceButton path="/buildings" handleClick={() => {
        setToAddBuilding(true);
        setOpen(true);
      }}
      />
      {open && (
        <AddOrEditModal closeDialogFunction={closeDialogFunction} housingAssociationId={housingAssociationId ?? ''}
                        openedBuilding={openedBuilding} addBuilding={toAddBuilding}
        />)}
    </>
  );
};

export default BuildingsList;