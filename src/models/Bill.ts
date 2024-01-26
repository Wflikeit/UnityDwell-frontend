import { HousingAssociationModel } from './HousingAssosiation.ts';

export interface BillModel {
  id?: string;
  amount: number;
  dateOfPublishing: Date;
  title: string;
  flatOwnerPhoneNumber: string;
  flatOwnerId: string;
  housingAssociation: HousingAssociationModel;
}
