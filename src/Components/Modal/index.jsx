import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormEditRegister(props) {
console.log(props);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Edit Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            defaultValue={props.recordForEdit == null ? "name" : props.recordForEdit.name}
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            defaultValue={props.recordForEdit == null ? "Address" : props.recordForEdit.adress}
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            defaultValue={props.recordForEdit == null ? "City" : props.recordForEdit.city}
            type="text"
            fullWidth
            variant="standard"
          />
                              <TextField
            autoFocus
            margin="dense"
            id="state"
            label="City"
            defaultValue={props.recordForEdit == null ? "City" : props.recordForEdit.state}
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="zip"
            label="Zip Code"
            type="text"
            defaultValue={props.recordForEdit == null ? "Zip Code" : props.recordForEdit.postalcode}
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="country"
            label="Country"
            defaultValue={props.recordForEdit == null ? "Country" : props.recordForEdit.country}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}