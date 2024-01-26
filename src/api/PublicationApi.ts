import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BillModel } from '../models/Bill.ts';
import { PublicationsResponse } from '../models/PublicationsResponse.ts';
import { CreateOrUpdatePublicationRequest } from '../models/CreateOrUpdatePublicationRequest.ts';

export const API_URL: string = 'http://localhost:8080/api/';
export const EXAMPLE_HOUSING_ASSOCIATION_ID: string = '04678797-6435-45d1-a748-770b33a1917b';
export const EXAMPLE_PUBLICATION_ID: string = '154e284f-1303-4e36-b3de-db32669e7cfe';
export const fetchPublications = async (): Promise<BillModel[]> => {
  const response = await axios.get<PublicationsResponse>(
    API_URL + 'housing-association/' + EXAMPLE_HOUSING_ASSOCIATION_ID + '/publications'
  );
  return response.data.publications;
};
export const fetchPublication = async (publicationId: string): Promise<BillModel> => {
  const response = await axios.get<BillModel>(
    API_URL + 'housing-association/' + EXAMPLE_HOUSING_ASSOCIATION_ID + '/publications/' + publicationId
  );
  return response.data;
};
export const usePublicationsQuery = () => {
  return useQuery(['publications'], fetchPublications);
};
export const usePublicationQuery = (publicationId: string) => {
  return useQuery(['publication', publicationId], () => fetchPublication(publicationId));
};
export const useCreatePublicationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: CreateOrUpdatePublicationRequest): Promise<number> => {
      const response = await axios.post(
        `${API_URL}housing-association/${data.housingAssociationId}/publications`,
        data,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      return response.status;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('publications');
      },
    }
  );
};
export const useUpdatePublicationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: CreateOrUpdatePublicationRequest): Promise<number> => {
      const response = await axios.put(`${API_URL}publications/${data.publicationId}`, data, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return response.status;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('publications');
      },
    }
  );
};
