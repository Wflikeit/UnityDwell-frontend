export interface CreateOrUpdateBillRequest {
  billId?: string;
  title: string;
  amount: string;
  flatOwnerPhoneNumber: string;
  housingAssociationId: string;
  dateOfPublishing: Date;

}