import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';
import {Button} from '@mui/material';
import {AddressModel} from '../../models/Address.ts';

const PublicationsPage = () => {
  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        localStorage.setItem('access_token', accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      } catch (error) {
        console.error('Error accessing an access token:', error);
      }

    };
    fetchData();
  }, [getAccessTokenSilently]);
  const doSth = async (): Promise<AddressModel> => {
    try {
      const response = await axios.get<AddressModel>('http://localhost:8080/api/address/76e3d25f-2705-4fbb-97cc-8b78613e80b6', {
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      throw error; // Dodaj ten fragment, aby błędy były przekazywane dalej
    }
  };
  return (
    <>
      <Helmet>
        <title>Publications</title>
      </Helmet>
      <Button onClick={doSth}>Click</Button>
    </>
  );
};
export default PublicationsPage;
