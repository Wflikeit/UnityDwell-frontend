import axios from 'axios';
import { useQuery } from 'react-query';
import { PublicationModel } from '../models/Publication.ts';
import { PublicationsResponse } from '../models/PublicationsResponse.ts';

const API_URL = 'http://localhost:8080/';
const EXAMPLE_HOUSING_ASSOCIATION_ID = '04678797-6435-45d1-a748-770b33a1917b';
const EXAMPLE_PUBLICATION_ID = '154e284f-1303-4e36-b3de-db32669e7cfe';
export const fetchPublications = async (): Promise<PublicationModel[]> => {
  const response = await axios.get<PublicationsResponse>(
    API_URL + 'api/' + EXAMPLE_HOUSING_ASSOCIATION_ID + 'publications/'
  );
  return response.data.publications;
};
export const fetchPublication = async (publicationId: string): Promise<PublicationModel> => {
  const response = await axios.get<PublicationModel>(
    API_URL + 'api/' + EXAMPLE_HOUSING_ASSOCIATION_ID + 'publications/' + EXAMPLE_PUBLICATION_ID
  );
  return response.data;
};
export const usePublicationsQuery = () => {
  return useQuery(['publications'], fetchPublications);
};
export const useApartmentQuery = (publicationId: string) => {
  return useQuery(['apartment', publicationId], () => fetchPublication(publicationId));
};

