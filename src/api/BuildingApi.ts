import { BuildingModel } from '../models/Building.ts';
import axios from 'axios';
import { BuildingsResponse } from '../models/BuildingsResponse.ts';
import { useQuery } from 'react-query';


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
}