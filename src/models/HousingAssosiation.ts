import { AddressModel } from './Address.ts';

export interface HousingAssociationModel {
  id: string;
  name: string;
  dateOfEstablishment: Date;
  nip: string;
  address: AddressModel;
}
