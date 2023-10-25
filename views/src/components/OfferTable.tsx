import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const categories = [{name: 'Id'}, {name: 'Type'}, {name: 'Customer'}, {name: 'Address'}, {name: 'Positions'}]

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

function getOffers(){
  const offers = [
      {id: 1, type: "Offer", customer: "Andreas Siaplaouras", address: "Beispielallee 10A, 8048 ZH Zürich", positions:[{posNr: "1", name: "Item 5A", amount: "1", price: "$20.00"}]},
      {id: 2, type: "Order", customer: "Andreas Siaplaouras", address: "Beispielallee 10A, 8048 ZH Zürich", positions:[{posNr: "1", name: "Item 79C", amount: "5", price: "$100.00"}]},
      {id: 3, type: "Invoice", customer: "Private AG", address: "605 La Cienega, 90012 CA Culver City", positions:[{posNr: "1", name: "Item 5A", amount: "1", price: "$20.00"}, {posNr: "2", name: "Item 5B", amount: "4", price: "$84.00"}, {posNr: "3", name: "Service 22", amount: "1", price: "$250.00"}]}
  ]
  return offers;
}

export default function CustomizedTables() {

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
        {getOffers().map((offer) => (
            <StyledTableRow key={offer.id}>
                <StyledTableCell>{offer.id}</StyledTableCell>
                <StyledTableCell>{offer.type}</StyledTableCell>
                <StyledTableCell>{offer.customer}</StyledTableCell>
                <StyledTableCell>{offer.address}</StyledTableCell>
                <StyledTableCell>
                  {offer.positions.map((position) => (
                    <p>{position.posNr}, {position.name}, {position.amount}x, {position.price}</p>
                  ))}
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}