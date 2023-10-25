import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const categories = [{name: 'Id'}, {name: 'Name'}, {name: 'Addresses'}]

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

function getAddresses(id) {
  const addresses = [
      {cusId: 1, street: 'Beispielallee 10A', plz: '8048', city: 'Zurich', country: 'Switzerland'},
      {cusId: 1, street: 'Beispielallee 10B', plz: '8048', city: 'Zurich', country: 'Switzerland'},
      {cusId: 2, street: 'Beispielallee 11', plz: '8048', city: 'Zurich', country: 'Switzerland'}
  ]
  return addresses.filter(address => address.cusId === id);
}

function getCustomers(){
  const users = [
      {id: 1, name: 'Andreas Siaplaouras'},
      {id: 2, name: 'Beispiel Human'}
  ]
  return users;
}

export default function CustomerTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {categories.map((category, index) => {
                return (
                    <StyledTableCell align="left">{category.name}</StyledTableCell>
                );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {getCustomers().map((customer) => (
            <StyledTableRow key={customer.id}>
                <StyledTableCell>{customer.id}</StyledTableCell>
                <StyledTableCell>{customer.name}</StyledTableCell>
                <StyledTableCell>
                  {getAddresses(customer.id).map((address) => (
                    <p>{address.street}, {address.plz} {address.city}, {address.country}</p>
                  ))}
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}