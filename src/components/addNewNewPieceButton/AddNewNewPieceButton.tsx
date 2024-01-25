import React from 'react';
import { Card, CardActionArea, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';

interface AddNewPieceButtonProps {
  path: string;
  handleClick: () => void;
}

const AddNewPieceButton: React.FC<AddNewPieceButtonProps> = ({ path, handleClick }) => {
  return (
    <CardActionArea component={RouterLink} to={path} onClick={handleClick}>
      <Card
        style={{ border: 'none', boxShadow: 'none' }}
        sx={{
          backgroundColor: 'rgba(203, 203, 204, 1)',
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <AddIcon />
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default AddNewPieceButton;
