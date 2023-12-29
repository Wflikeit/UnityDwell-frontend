import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react';

const PublicationsPage = () => {
  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        localStorage.setItem('access_token', accessToken);
      } catch (error) {
        console.error('Błąd uzyskiwania tokena dostępu:', error);
      }
    };

    fetchData();
  }, [getAccessTokenSilently]);
  return (
    <>
      <Helmet>
        <title>Publications</title>
      </Helmet>
    </>
  );
};
export default PublicationsPage;
