import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BillModel } from '../models/Bill.ts';
import { BillsResponse } from '../models/BillsResponse.ts';
import { BillTitleModel } from '../models/BillTitle.ts';
import { BillTitlesResponse } from '../models/BillTitlesReponse.ts';
import { CreateOrUpdateBillRequest } from '../models/CreateOrUpdateBillRequest.ts';

export const API_URL: string = 'http://localhost:8080/api/';
export const EXAMPLE_HOUSING_ASSOCIATION_ID: string = '04678797-6435-45d1-a748-770b33a1917b';
export const EXAMPLE_BILL_ID: string = '7f953b07-9deb-43c1-895b-2eb9d0aa10b9';
export const fetchBills = async (): Promise<BillModel[]> | [] => {
  const response = await axios.get<BillsResponse>(
    API_URL + 'bills/housingAssociation/' + EXAMPLE_HOUSING_ASSOCIATION_ID
  );
  return response.data.bills;
};
export const fetchBillTitles = async (): Promise<BillTitleModel[] | []> => {
  const response = await axios.get<BillTitlesResponse>(API_URL + 'bills/titles');
  return response.data.titles;
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
export const useBillTitlesQuery = () => {
  return useQuery(['titles'], fetchBillTitles);
};
export const useBillQuery = (billId: string) => {
  return useQuery(['bill', billId], () => fetchBill(billId));
};
export const useCreateBillMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: CreateOrUpdateBillRequest): Promise<number> => {
      const response = await axios.post(`${API_URL}bills`, data, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return response.status;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bills');
      },
    }
  );
};
export const useUpdateBillMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: CreateOrUpdateBillRequest): Promise<number> => {
      const response = await axios.put(`${API_URL}bills/${data.billId}`, data, {
        headers: {
          'content-type': 'application/json',
        },
      });
      return response.status;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('bills');
      },
    }
  );
};
