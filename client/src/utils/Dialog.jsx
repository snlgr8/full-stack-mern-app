import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const CustomDialog = ({ handleClose, handleDelete, dialogDetails }) => {
  const {
    open,
    dialogContent,
    dialogTitle,
    confirmButtonText,
    cancelButtonText,
    maxWidth,
  } = dialogDetails;
  return (
    <Dialog
      fullWidth={true}
      maxWidth={maxWidth}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} variant='contained' color='secondary'>
          {confirmButtonText}
        </Button>
        <Button onClick={handleClose} variant='contained' color='primary'>
          {cancelButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
