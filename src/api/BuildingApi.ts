import { BuildingModel } from '../models/Building.ts';
import axios from 'axios';
import { BuildingsResponse } from '../models/BuildingsResponse.ts';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CreateOrUpdateBuildingRequest } from '../models/CreateOrUpdateBuildingRequest.ts';


export const API_URL: string = 'http://localhost:8080/api/';
export const EXAMPLE_HOUSING_ASSOCIATION_ID: string = '04678797-6435-45d1-a748-770b33a1917b';
export const fetchBuildings = async (): Promise<BuildingModel[]> => {
  const response = await axios.get<BuildingsResponse>(
    API_URL + 'housing-association/' + EXAMPLE_HOUSING_ASSOCIATION_ID + '/buildings',
  );
  return response.data.buildings;
};
export const useBuildingsQuery = () => {
  return useQuery(['buildings'], fetchBuildings);
};
export const useCreateBuildingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: CreateOrUpdateBuildingRequest): Promise<number> => {
      const response = await axios.post(`${API_URL}buildings`, data, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return response.status;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('buildings');
      },
    },
  );
};
export const useUpdateBuildingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(async (data: CreateOrUpdateBuildingRequest): Promise<number> => {
    const response = await axios.put(`${API_URL}buildings/${data.id}`, data, {
      headers: {
        'content-type': 'application/json'
      },
    });
    return response.status;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('buildings');
    }
  })
}