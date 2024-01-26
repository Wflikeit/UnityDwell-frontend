import React, { useState } from 'react';
import { useBuildingsQuery } from '../../api/BuildingApi.ts';
import { BuildingModel } from '../../models/Building.ts';
import { Skeleton, Stack } from '@mui/material';
import RecordCard from '../../components/recordCard/RecordCard.tsx';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddNewPieceButton from '../../components/addNewNewPieceButton/AddNewNewPieceButton.tsx';
import AddOrEditModal from '../../components/addOrEditModal/AddOrEditModal.tsx';
import AddOrUpdateBuildingForm from '../../components/addOrUpdateBuildingForm/AddOrUpdateBuildingForm.tsx';
import { grey } from '@mui/material/colors';


interface BuildingsListProps {
  housingAssociationId: string;
}

const BuildingsList: React.FC<BuildingsListProps> = ({ housingAssociationId }) => {
  const { isLoading, isError, data } = useBuildingsQuery();
  const SkeletonHeight = 80;
  const [open, setOpen] = useState(false);
  const [openedBuilding, setOpenedBuilding] = useState<BuildingModel>();
  const closeDialogFunction = () => {
    setOpen(false);
    setOpenedBuilding(undefined);
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
      <AddNewPieceButton path="/buildings" handleClick={() => {
        setOpen(true);
      }}
      />
      <Stack spacing={2} sx={{ marginTop: '2rem' }}>
        {data?.map((building) => (
          <RecordCard key={building.id} cardFirstItem={{
            text: '',
            subtext: `${building.address.city} ${building.address.street}
            , ${building.address.numberOfBuilding}, ${building.address.postalCode}`, icon: <ApartmentIcon />,
          }} cardItems={[{ text: '4 flats', icon: <MeetingRoomIcon /> },
            { text: `${building.numberOfFloors} floors`, icon: <ApartmentIcon /> }]}
                      collapisbleComp={
                        <>
                          <p style={{
                            padding: '1rem',
                            backgroundColor: grey[200], borderRadius: '0.5rem',
                          }}
                          >Date of thermal modernization: {building.dateOfThermalModernization}</p>
                          <p style={{
                            padding: '1rem',
                            backgroundColor: grey[200], borderRadius: '0.5rem',
                          }}
                          >Date of commissioning: {building.dateOfCommissioning}</p>
                          <p style={{
                            padding: '1rem',
                            backgroundColor: grey[200], borderRadius: '0.5rem',
                          }}
                          >Date of major renovation: {building.dateOfMajorRenovation}</p>
                        </>
                      }
                      openDialogFunction={() => openDialogFunction(building)}
          />
        ))}
      </Stack>
      {
        open && (
          <AddOrEditModal title={openedBuilding ? 'Edit building' : 'Add new building'}
                          closeDialogFunction={closeDialogFunction} child={
            <AddOrUpdateBuildingForm closeDialogFunction={closeDialogFunction}
                                     housingAssociationId={housingAssociationId}
                                     openedBuilding={openedBuilding}
            />}

          />)}
    </>
  );
};

export default BuildingsList;