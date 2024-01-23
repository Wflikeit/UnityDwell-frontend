export interface CreateOrUpdatePublicationRequest {
  publicationId?: string;
  title: string;
  content: string;
  dateOfPublishing?: Date;
  housingAssociationId: string;
}