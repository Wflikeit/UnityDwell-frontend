import React from 'react';
import Box from '@mui/material/Box';
import { BuildingModel } from '../../models/Building.ts';

interface BuildingDetailsProps {
  building: BuildingModel;
}

const BuildingDetails: React.FC<BuildingDetailsProps> = ({
                                                           building
                                                         }) => {
  return (
    <Box className="container" sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', justifyItems: 'center'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <span style={{justifySelf: 'left'}}>Date of Thermal Modernization:</span>
        <span style={{justifySelf: 'right'}}>{building.dateOfThermalModernization}</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <span style={{justifySelf: 'left'}}>Date of Commissioning:</span>
        <span style={{justifySelf: 'right'}}>{building.dateOfCommissioning}</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <span style={{justifySelf: 'left'}}>Date of Major Renovation:</span>
        <span style={{justifySelf: 'right'}}>{building.dateOfMajorRenovation}</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <span style={{justifySelf: 'left'}}>Intended for Living:</span>
        <span style={{justifySelf: 'right'}}>{building.intendedForLiving ? 'Yes' : 'No'}</span>
      </div>
    </Box>
  );
};

export default BuildingDetails;
