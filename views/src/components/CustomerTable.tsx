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
import UpdateDialog from './CreateDialog.tsx';
import { useFetchCustomers as useFetchData } from '../hooks/UseFetchData.tsx';

interface customerProps {
  id: string,
  name: string,
};

interface addressProps {
  id: number,
  customerId: string,
  street: string,
  plz: string,
  city: string,
  country: string,
};

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

function GetAddresses() {
  const [addresses, setAddresses] = React.useState<addressProps[]>([]);

    fetch('http://localhost:8080/address',
      {method: 'GET'})
      .then((response) => response.json())
      .then((data) => {
          setAddresses(data);
      })
      .catch((err) => {
          console.log(err.message);
      });  

      return addresses;
}

//TODO Placeholder
function updateCustomer(id: string){

}

function DeleteCustomer(id: string){
  React.useEffect( () => {
    fetch('http://localhost:8080/customer', {method: 'DELETE'})
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });  
    }, []);
}

export default function CustomerTable() {
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
  const [updateCustomerId, setUpdateCustomerId] = React.useState('');
  const categories = [{name: 'Name'}, {name: 'Addresses'}, {name: 'Actions'}]
  const customers: [] | {} = useFetchData('http://localhost:8080/customer');
  const allAddresses = GetAddresses();

  function editCustomer(id: string){
    setUpdateCustomerId(id);
    handleUpdateDialog();
  }

  function handleUpdateDialog(){
    setOpenUpdateDialog(!openUpdateDialog)
  }

  return (
    <TableContainer component={Paper}>
      <UpdateDialog
        open={openUpdateDialog}
        page={'customer'}
        handler={handleUpdateDialog}
        update={true}
        customerId={updateCustomerId}
      />
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
          {customers.map((customer) => (
            <>
            <StyledTableRow key={customer.id}>
                <StyledTableCell>{customer.name}</StyledTableCell>
                <StyledTableCell>
                  {allAddresses.filter(address => address.customerId.toString() === customer.id.toString()).map(filteredAddress => (
                    <p>{filteredAddress.street}, {filteredAddress.plz} {filteredAddress.city}, {filteredAddress.country}</p>
                  ))}
                </StyledTableCell>
                <StyledTableCell sx={{minWidth: 55, maxWidth: 10}}>
                  <Button variant='contained' color='warning' sx={{marginRight: 1}} onClick={() => editCustomer(customer.id)}><EditIcon /></Button>
                  <Button variant='contained' color='error' onClick={() => DeleteCustomer(customer.id)}><DeleteIcon /></Button>
                </StyledTableCell>
            </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}