export interface BillModel {
  id: string;
  amount: number;
  dateOfPublishing: Date;
  title: string;
  flatOwnerPhoneNumber: number;
  flatOwnerId: string;
  housingAssociation: object;
}
