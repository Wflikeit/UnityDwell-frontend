import React from 'react';
import { BuildingModel } from '../../models/Building.ts';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddOrUpdatePublicationForm from '../addOrUpdatePublicationForm/AddOrUpdatePublicationForm.tsx';

interface AddOrEditModalProps {
  housingAssociationId: string;
  closeDialogFunction: () => void;
  openedPublication?: PublicationModel;
  openedBuilding?: BuildingModel;
  addPublication?: boolean;
  addBuilding?: boolean;
  // dataModel/: BillModel | BuildingModel | PublicationModel
  children?: React.ReactElement;
  title?: string;
}

const AddOrEditModal: React.FC<AddOrEditModalProps> = ({
  housingAssociationId,
  closeDialogFunction,
  openedPublication,
  openedBuilding,
  addPublication = false,
  addBuilding = false,
  children,
  title,
}) => {
  return (
    <div>
      <Dialog open={true} onClose={closeDialogFunction} fullWidth={true} keepMounted={true}>
        {title ? (
          <DialogTitle variant="h4">{title}</DialogTitle>
        ) : (
          <DialogTitle variant="h4">{openedPublication ? 'Edit publication' : 'Add new publication'}</DialogTitle>
        )}

        <IconButton
          aria-label="close"
          onClick={closeDialogFunction}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        {openedPublication && (
          <AddOrUpdatePublicationForm
            housingAssociationId={housingAssociationId}
            closeDialogFunction={closeDialogFunction}
            openedPublication={openedPublication}
          />
        )}
        {addPublication && (
          <AddOrUpdatePublicationForm
            housingAssociationId={housingAssociationId}
            closeDialogFunction={closeDialogFunction}
            openedPublication={openedPublication}
          />
        )}
        {children && children}
      </Dialog>
    </div>
  );
};

export default AddOrEditModal;
