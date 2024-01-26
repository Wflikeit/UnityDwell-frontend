import { AddressModel } from './Address.ts';

export interface BuildingModel {
  id: string;
  address: AddressModel;
  dateOfThermalModernization: Date;
  dateOfCommissioning: Date;
  dateOfMajorRenovation: Date;
  numberOfFloors: number;
  intendedForLiving: string;
  housingAssociationId: string;
}