import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';



const initialFValues = {
  id: 0,
  name:  '',
  address:'',
  city:  '',
  state: '',
  zip:    '',
  country:'',
}

export default function FormEditRegister(props) {
  const { recordForEdit } = props;
  const [values, setValues] = useState(initialFValues);


const [updateValues,setUpdateValues] = useState(() => {

  if(recordForEdit)
  setUpdateValues({
    id:  props.recordForEdit.id,
    name: props.recordForEdit.name,
    email: props.recordForEdit.email,
    datebirth: props.recordForEdit.datebirth,
    address: props.recordForEdit.adress,
    city: props.recordForEdit.city,
    state: props.recordForEdit.state,
    zip: props.recordForEdit.postalcode,
    country:  props.recordForEdit.country
  })
},[recordForEdit]);


useEffect(() => {
  if (recordForEdit != null)
      setUpdateValues({
          ...recordForEdit
      })
}, [recordForEdit])

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleEdit = () => {
    axios.put('https://0r21afw6u1.execute-api.us-east-1.amazonaws.com/api/patient/update/register/',{
      id:     updateValues.id,
      name:   updateValues.name,
      email:   updateValues.email,
      datebirth: updateValues.date,
      address: updateValues.address,
      city:   updateValues.city,
      state:  updateValues.state,
      zip:    updateValues.postalcode,
      country:updateValues.country,
    });
    handleClose();
    props.setRegisters(props.registers);
  }
  const handleClose = () => {
    props.setOpen(false);
  };

  const hadleUpdate = (value) => {
    console.log("value",value);
    setUpdateValues(prevValues=>({
      ...prevValues,
      [value.target.id] : value.target.value
    }))
  }

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
            onChange = {hadleUpdate}
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            defaultValue={props.recordForEdit == null ? "email" : props.recordForEdit.email}
            onChange = {hadleUpdate}
            fullWidth
            variant="standard"
          />
          <TextField
            id="date"
            label="Birthday"
            name="datebirth"
            defaultValue={props.recordForEdit == null ? "dd/MMM/yyyy" : props.recordForEdit.datebirth}
            type="date"
            sx={{ width: 200 , marginTop: "0.8rem"}}
            onChange = {hadleUpdate}
            InputLabelProps={{
              shrink: true,
            }}
        />
                    <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            onChange={hadleUpdate}
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
            onChange={hadleUpdate}
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
            onChange={hadleUpdate}
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="zip"
            label="Zip Code"
            type="text"
            onChange={hadleUpdate}
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
            onChange={hadleUpdate}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}