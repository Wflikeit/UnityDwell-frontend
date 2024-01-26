import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface AddOrEditModalProps {
  closeDialogFunction: () => void;
  child: React.JSX.Element;
  title: string;
}

const AddOrEditModal: React.FC<AddOrEditModalProps> = ({
                                                         child,
                                                         title,
                                                         closeDialogFunction,
                                                       }) => {
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
      {child && child}
    </Dialog>
  </div>);
};

export default AddOrEditModal;