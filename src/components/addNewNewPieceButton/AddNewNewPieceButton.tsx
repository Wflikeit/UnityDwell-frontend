import React from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import { AddressModel } from '../../models/Address.ts';
import axios from 'axios';

interface AddNewPieceButtonProps {
  path: string;
}

const AddNewPieceButton: React.FC<AddNewPieceButtonProps> = ({ path }) => {
  const doSth = async (): Promise<AddressModel> => {
    try {
      const response = await axios.get<AddressModel>(
        'http://localhost:8080/api/address/76e3d25f-2705-4fbb-97cc-8b78613e80b6',
        {}
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      throw error; // Dodaj ten fragment, aby błędy były przekazywane dalej
    }
  };

  return (
    <CardActionArea component={RouterLink} to={path} onClick={doSth}>
      <Card
        style={{ border: 'none', boxShadow: 'none' }}
        sx={{backgroundColor: 'rgba(203, 203, 204, 1)'  , height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CardContent>
          <AddIcon />
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default AddNewPieceButton;
