import React from 'react';
import { PublicationModel } from '../../models/Publication.ts';
import { BuildingModel } from '../../models/Building.ts';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddOrUpdatePublicationForm from '../addOrUpdatePublicationForm/AddOrUpdatePublicationForm.tsx';
import AddOrUpdateBuildingForm from '../addOrUpdateBuildingForm/AddOrUpdateBuildingForm.tsx';


interface AddOrEditModalProps {
  housingAssociationId: string;
  closeDialogFunction: () => void;
  openedPublication?: PublicationModel;
  openedBuilding?: BuildingModel;
  addPublication?: boolean;
  addBuilding?: boolean;
}

const AddOrEditModal: React.FC<AddOrEditModalProps> = ({
                                                         housingAssociationId, closeDialogFunction,
                                                         openedPublication,
                                                         openedBuilding,
                                                         addPublication = false,
                                                         addBuilding = false,
                                                       }) => {
  let title: string = '';
  title = openedPublication ? 'Edit publication' : '';
  title = addPublication ? 'Add new publication' : '';
  title = openedBuilding ? 'Edit building' : '';
  title = addBuilding ? 'Add new building' : '';
  return (<div>
    <Dialog open={true} onClose={closeDialogFunction} fullWidth={true} keepMounted={true}>
      <DialogTitle variant="h4">{title}</DialogTitle>
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
      {openedPublication && (<AddOrUpdatePublicationForm housingAssociationId={housingAssociationId}
                                                         closeDialogFunction={closeDialogFunction}
                                                         openedPublication={openedPublication}
                             />)}
      {addPublication && (<AddOrUpdatePublicationForm housingAssociationId={housingAssociationId}
                                                      closeDialogFunction={closeDialogFunction}
                                                      openedPublication={openedPublication}
                          />)}
      {openedBuilding && (<AddOrUpdateBuildingForm housingAssociationId={housingAssociationId}
                                                   closeDialogFunction={closeDialogFunction}
                                                   openedBuilding={openedBuilding}
                          />)}
      {addBuilding && (<AddOrUpdateBuildingForm housingAssociationId={housingAssociationId}
                                                   closeDialogFunction={closeDialogFunction}
                                                   openedBuilding={openedBuilding}
                          />)}
    </Dialog>
  </div>);
};

export default AddOrEditModal;