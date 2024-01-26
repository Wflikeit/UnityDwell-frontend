import { AddressModel } from '../models/Address.ts';
import axios from 'axios';
import { AddressesResponse } from '../models/AddressesResponse.ts';
import { useQuery } from 'react-query';


export const API_URL: string = 'http://localhost:8080/api/';
export const fetchAllAddresses = async (): Promise<AddressModel[]> => {
  const response = await axios.get<AddressesResponse>(
    API_URL + 'address'
  );
  return response.data.addresses;
}
export const useAllAddressesQuery = () => {
  return useQuery(['addresses'], fetchAllAddresses);
}