import * as React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'João Paulo', 6.0, 24, 4.0),
  createData(2, 'Maria Luiza', 9.0, 37, 4.3),
  createData(3, 'Pedro Andrade', 16.0, 24, 6.0),
  createData(4, 'Henrique Souza', 3.7, 67, 4.3),
  createData(5, 'Julia Alves', 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 10 , w: -50}}>
         <TableContainer component={Paper}  maxWidth="lg" sx={{ mb: 10 , w: -50}}>
   <Typography variant="h6" gutterBottom>
    Management
     </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Pacient Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Adress</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center"><IconButton aria-label="delete">
                                              <DeleteIcon />
                                              </IconButton>
                                              <IconButton>
                                              <ModeEditIcon />
                                              </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
 
  );
}







