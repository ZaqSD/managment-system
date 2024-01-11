import * as React from 'react';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

interface offerProps {
  id: number,
  type: string,
  customer: string,
  address: string
  positions: [{posNr: string, name: string, amount: string, price: string}]
};

interface addressProps {
  id: number,
  customerId: string,
  street: string,
  plz: string,
  city: string,
  country: string,
};

const categories = [{name: 'Type'}, {name: 'Customer'}, {name: 'Address'}, {name: 'Positions'}, {name: 'Actions'}]

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

function GetOffers(){
  const [offers, setOffers] = React.useState<offerProps[]>([]);
  fetch('http://localhost:8080/offer', {method: 'GET'})
      .then((response) => response.json())
      .then((data) => {
        setOffers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });  
return offers;
}

//TODO Placeholder
function updateOffer(id: number){

}

//TODO Placeholder
function deleteOffer(id: number){

}

function editOffer(id: number){

}

export default function CustomizedTables() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="customized table">
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
        {GetOffers().map(offer => (
            <StyledTableRow key={offer.id}>
                <StyledTableCell sx={{width: '10%'}}>{offer.type}</StyledTableCell>
                <StyledTableCell sx={{width: '20%'}}>{offer.customer}</StyledTableCell>
                <StyledTableCell sx={{width: '30%'}}>{offer.address}</StyledTableCell>
                <StyledTableCell sx={{width: '30%'}}>
                  {offer.positions.map((position) => (
                    <p>{position.posNr}, {position.name}, {position.amount}x, {position.price}</p>
                  ))}
                </StyledTableCell>
                <StyledTableCell sx={{width: '10%'}}>
                  <Button variant='contained' color='warning' sx={{marginRight: 1}} onClick={() => editOffer(offer.id)}><EditIcon /></Button>
                  <Button variant='contained' color='error' onClick={() => deleteOffer(offer.id)}><DeleteIcon /></Button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}