import axios from 'axios';
import { useQuery } from 'react-query';
import { BillModel } from '../models/Publication.ts';
import { PublicationsResponse } from '../models/PublicationsResponse.ts';
import { BillModel } from '../models/Bill.ts';
import { BillsResponse } from '../models/BillsResponse.ts';

export const API_URL: string = 'http://localhost:8080/api/';
export const EXAMPLE_HOUSING_ASSOCIATION_ID: string = '04678797-6435-45d1-a748-770b33a1917b';
export const EXAMPLE_BILL_ID: string = '7f953b07-9deb-43c1-895b-2eb9d0aa10b9';
export const fetchBills = async (): Promise<BillModel[]> | [] => {
  const response = await axios.get<BillsResponse>(
    API_URL + 'bills/housingAssociation/' + EXAMPLE_HOUSING_ASSOCIATION_ID
  );
  return response.data.bills;
};
export const fetchBill = async (billId: string): Promise<BillModel> => {
  const response = await axios.get<BillModel>(
    API_URL + 'housingAssociation/' + EXAMPLE_HOUSING_ASSOCIATION_ID + '/publications/' + billId
  );
  return response.data;
};
export const useBillsQuery = () => {
  return useQuery(['bills'], fetchBills);
};
export const useBillQuery = (billId: string) => {
  return useQuery(['bill', billId], () => fetchBill(billId));
};
