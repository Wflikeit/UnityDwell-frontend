import { BuildingModel } from '../../models/Building.ts';
import React from 'react';


interface AddOrUpdateBuildingProps {
  openedBuilding?: BuildingModel;
  housingAssociationId: string;
  closeDialogFunction: () => void;
}

interface AddOrUpdateBuildingFormProps {
  dateOfThermalModernization: Date;
  dateOfCommissioning: Date;
  dateOfMajorRenovation: Date;
  numberOfFloors: number;
  intendedForLiving: boolean;
}

const AddOrUpdateBuildingForm: React.FC<AddOrUpdateBuildingProps> = ({
                                                                       openedBuilding,
                                                                       housingAssociationId,
                                                                       closeDialogFunction,
                                                                     }) => {
  return (<div />);
};

export default AddOrUpdateBuildingForm;