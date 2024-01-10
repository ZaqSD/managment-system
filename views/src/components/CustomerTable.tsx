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
import { Customer, useFetchCustomers as useFetchData } from '../hooks/UseFetchData.tsx';
import DeleteDialog from './DeleteDialog.tsx';

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
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [updateCustomerId, setUpdateCustomerId] = React.useState('');

  const [deleteDialogId, setDeleteDialogId] = React.useState('');
  const [deleteDialogName, setDeleteDialogName] = React.useState('');

  const categories = [{name: 'Name'}, {name: 'Addresses'}, {name: 'Actions'}]
  const customers: [] | Customer[] = useFetchData('http://localhost:8080/customer');
  const allAddresses = GetAddresses();

  function editCustomer(id: string){
    setUpdateCustomerId(id);
    handleUpdateDialog();
  }

  function handleUpdateDialog(){
    setOpenUpdateDialog(!openUpdateDialog)
  }

  function handleDeleteDialog(){
    setOpenDeleteDialog(!openDeleteDialog)
  }

  function handleDeleteClick(id: string, name: string){
    setDeleteDialogId(id);
    setDeleteDialogName(name);
    handleDeleteDialog();
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
                    <StyledTableCell key={index} align="left">{category.name}</StyledTableCell>
                );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <DeleteDialog 
            id={deleteDialogId}
            name={deleteDialogName}
            type={'customer'}
            open={openDeleteDialog}
            handler={handleDeleteDialog}
          />
          {customers.map((customer) => (
            <>
              <StyledTableRow key={customer.id}>
                  <StyledTableCell>{customer.name}</StyledTableCell>
                  <StyledTableCell>
                    {allAddresses.filter(address => address.customerId.toString() === customer.id.toString()).map(filteredAddress => (
                      <p key={filteredAddress.id}>{filteredAddress.street}, {filteredAddress.plz} {filteredAddress.city}, {filteredAddress.country}</p>
                    ))}
                  </StyledTableCell>
                  <StyledTableCell sx={{minWidth: 55, maxWidth: 10}}>
                    <Button variant='contained' color='warning' sx={{marginRight: 1}} onClick={() => editCustomer(customer.id)}><EditIcon /></Button>
                    <Button variant='contained' color='error' onClick={() => handleDeleteClick(customer.id, customer.name)}><DeleteIcon /></Button>
                  </StyledTableCell>
              </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}