
export interface CreateOrUpdateBuildingRequest {
  id?: string;
  dateOfThermalModernization: Date;
  dateOfCommissioning: Date;
  dateOfMajorRenovation: Date;
  numberOfFloors: number;
  intendedForLiving: boolean;
  housingAssociationId: string;
  addressId: string;
  city: string;
  street: string;
  numberOfBuilding: string;
  postalCode: string;
}