import * as React from 'react';
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



const initialFValues = {
  id: '',
  name:  '',
  address:'',
  email: '',
  datebirth: 'dd/mm/aaaa',
  city:  '',
  state: '',
  zip:    '',
  country:'',
}
export default function PacientForm() {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const resetForm = () => {
    setValues(initialFValues);
}

const validate = (fieldValues = values) => {
  let temp = { ...errors }
  if ('name' in fieldValues)
      temp.Name = fieldValues.name ? "" : "This field name is required."
  if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
  if ('address' in fieldValues)
      temp.address = fieldValues.address ? "" : "This field adress is required."
  if ('city' in fieldValues)
      temp.city = fieldValues.city ? "" : "This field city is required."
  if ('state' in fieldValues)
      temp.state = fieldValues.state ? "" : "This field state is required."
  if ('mobile' in fieldValues)
      temp.zip = fieldValues.zip.length > 9 ? "" : "Minimum 10 numbers required in zipcode."
  setErrors({
      ...temp
  })

  if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
}

  const saveRegister = () => {
    if(validate()){
    axios.post('https://0r21afw6u1.execute-api.us-east-1.amazonaws.com/api/patient/', {
      name: values.name,
      email: values.email,
      datebirth: values.datebirth,
      adress: values.address,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
    }).then((response) => {
      alert("Cadastro Efetuado com Sucesso!");
      resetForm();
    })
    }else{
      alert("Verificar se os campos estão preenchidos corretamente.");
    }


  }

  return (

    <React.Fragment>
    <Container component="main" maxWidth="lg" sx={{ mb: 10 , w: -50}}>
      
    <Typography variant="h6" gutterBottom>
        Register
      </Typography>
      
      <Grid container spacing={2}>
        
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            value = {values.name}
            autoComplete="given-name"
            defaultValue={resetForm}
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={5}>
        <TextField
            id="date"
            label="Birthday"
            name="datebirth"
            value = {values.datebirth}  
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleaddValues}
        />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            value = {values.address}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
        <TextField
            required
            id="email"
            name="email"
            value = {values.email}
            label="E-mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value = {values.city}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            id="state"
            name="state"
            value = {values.state}
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value = {values.zip}
            label="Zip / Postal code"
            fullWidth

            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            value={values.country}
            autoComplete="shipping country"
            variant="standard"
            onChange={handleaddValues}
          />
        </Grid>
        <Button
            variant="contained"
            onClick={() => saveRegister()}
            sx={{ mt: 3, ml: 1 }}
            >
        {'Submit'}
       </Button>
      </Grid>
    </Container>

    </React.Fragment>
  );
}
