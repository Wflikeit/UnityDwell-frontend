export interface BuildingModel {
  id: string;
  addressId: string;
  dateOfThermalModernization: Date;
  dateOfCommissioning: Date;
  dateOfMajorRenovation: Date;
  numberOfFloors: number;
  intendedForLiving: boolean;
  housingAssociationId: string;
}