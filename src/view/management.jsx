import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FormEditRegister from '../Components/Modal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function TablePacient() {
const [registers, setRegisters] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [open, setOpen] = React.useState(false);
const [recordForEdit, setRecordForEdit] = useState(null);


const OpenModalEdit = (row) => {
    setRecordForEdit(row);
    setOpen(true);
}

const HandleDeletePacient = async (id) => {
  setIsLoading(true);
  await axios.delete(`http://localhost:3001/api/patient/delete/${id}`)
    .then((data) => {
      console.log("DATA",data);
      axios.get('http://localhost:3001/api/patient/getRegisters/').then((response) => {
        setRegisters(response.data);
        setIsLoading(false);
        console.log("registros",registers);
      });
    })
    .catch(error => {
      console.error("teste erro",error);
      setIsLoading(false);
    });
};

useEffect(() => {
  axios.get('http://localhost:3001/api/patient/getRegisters/').then((response) => {
    setRegisters(response.data);
  });
}, []);

  return (
    <>
        <Container component="main" maxWidth="xlg" sx={{ mb: 10 , w: 50}}>
         <TableContainer component={Paper}  maxWidth="xlg" sx={{ mb: 10 , w: 50}}>
   <Typography variant="h6" gutterBottom>
    Management
     </Typography>
      <Table sx={{ minWidth: 800 }} aria-label="table patient">
  
        <TableHead>
          <TableRow>
            <StyledTableCell>Pacient Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">E-mail</StyledTableCell>
            <StyledTableCell align="center">Birth Date</StyledTableCell>
            <StyledTableCell align="center">Adress</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">State</StyledTableCell>
            <StyledTableCell align="center">Zip Code</StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registers.map((row) => (
          <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.datebirth}</StyledTableCell>
              <StyledTableCell align="center">{row.adress}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.state}</StyledTableCell>
              <StyledTableCell align="center">{row.postalcode}</StyledTableCell>
              <StyledTableCell align="center">{row.country}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                    <DeleteIcon  onClick= {() => HandleDeletePacient(row.id) 
                    } />
                    </IconButton>
                    <IconButton>
                    <ModeEditIcon  onClick= {() => OpenModalEdit(row) 
                    }/>
                    </IconButton>
              </StyledTableCell>
            </StyledTableRow>


            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    <FormEditRegister open={open} setOpen= {setOpen}  setRegisters = {setRegisters} Registers = {registers} recordForEdit={recordForEdit}/>
    </>

 
  );
}







