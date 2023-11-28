import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, DialogActions, FormControl, MenuItem, TextField } from '@mui/material';
import CreateDialogActions from './CreateDialogActions.tsx';

type customerProps = {
    id: number
    name: string;
  };

interface CreateContentCustomerProps{
    handler: () => void;
}

export default function CreateContentCustomer(props: CreateContentCustomerProps) {
    const [createName, setCreateName] = React.useState('');
    const [createAddressStreet, setCreateAddressStreet] = React.useState('');
    const [createAddressPlz, setCreateAddressPlz] = React.useState('');
    const [createAddressCity, setCreateAddressCity] = React.useState('');
    const [createAddressCountry, setCreateAddressCountry] = React.useState('');
    const [createAddressNextId, setCreateAddressNextId] = React.useState(GetCustomers().length);

    const addresses = [{ street: '', plz: '', city: '', country:'' }];

    const newCustomer: {
        name: string
        addresses: {street: string, plz: string, city: string, country: string}[]
    }[] = [];

    async function PostAddress(newAddress: {customerId: string, street: string, plz: string, city: string, country: string}) {
        await fetch('http://localhost:8080/address', {
        method: 'POST',
        body: JSON.stringify(newAddress),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => {response.json(); console.log(response);})
        .catch((err) => {
            console.log(err.message);
        });
    }

    async function PostCustomer() {
        await fetch('http://localhost:8080/customer', {
        method: 'POST',
        body: JSON.stringify(newCustomer[0]),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => {response.json(); console.log(response);})
        .catch((err) => {
            console.log(err.message);
        });
    }

    function GetCustomers(){    
        const [customers, setCustomers] = React.useState<customerProps[]>([]);
          fetch('http://localhost:8080/customer', {method: 'GET'})
              .then((response) => response.json())
              .then((data) => {
                setCustomers(data);
              })
              .catch((err) => {
                console.log(err.message);
              });  
        return customers;
      }

    function addAddress(){
        
        addresses.push({
            street: createAddressStreet,
            plz: createAddressPlz,
            city: createAddressCity,
            country: createAddressCountry
        })
        setCreateAddressNextId(createAddressNextId + 1);

    }

    function handleChangeName(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateName(event.target.value as string);
    }

    function handleChangeAddressStreet(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateAddressStreet(event.target.value as string);
    }

    function handleChangeAddressPlz(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateAddressPlz(event.target.value as string);
    }

    function handleChangeAddressCity(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateAddressCity(event.target.value as string);
    }

    function handleChangeAddressCountry(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateAddressCountry(event.target.value as string);
    }

    function submit() {
        newCustomer.push({
            name: createName,
            addresses: addresses
        });

        PostCustomer();

        /*
        addresses.forEach((address) => {
            PostAddress(address);
        })
        */
       
        props.handler();
    }

    return (
        <>
        <TextField id="newCustomerName" label="Name" variant="outlined" sx={{marginTop: 2}} onChange={event => handleChangeName(event)}/>
        <Box sx={{backgroundColor: '#F6F6F6', borderRadius: 4, padding: 2, paddingTop: 1, marginTop: 1}}>
        <Typography sx={{marginLeft: 0.5, marginTop: 1, fontSize: 20, fontWeight: 600}}>Address</Typography>
            <TextField
                id="newCustomerStreet"
                label="Street & Nr"
                variant="outlined"
                sx={{marginTop: 2, marginRight: '2%', width: '78%'}}
                onChange={event => handleChangeAddressStreet(event)}
            />
            <TextField
                id="newCustomerPlz"
                label="Postal Code"
                variant="outlined"
                sx={{marginTop: 2, width: '20%'}}
                onChange={event => handleChangeAddressPlz(event)}
            />
            <TextField
                id="newCustomerCity"
                label="City"
                variant="outlined" 
                sx={{marginTop: 2, marginRight: '2%', width: '38%'}}
                onChange={event => handleChangeAddressCity(event)}
            />
            <TextField
                id="newCustomerCountry"
                label="Country"
                variant="outlined"
                sx={{marginTop: 2, marginRight: '2%', width: '38%'}}
                onChange={event => handleChangeAddressCountry(event)}
            />
            <Button
                type='submit'
                variant='outlined'
                color='primary'
                sx={{height: 55, width: '20%', marginTop: 2, marginLeft: 0, fontSize: 16, fontWeight: 600}}
                onClick={() => addAddress()}
            >Add</Button>
            <div>
                {addresses.map(address => {
                    return(
                        <p className=''><b> |</b> {address.street}, {address.plz}, {address.city}, {address.country}</p>
                    )
                })}
                </div>
        </Box>
        <CreateDialogActions submit={submit} handler={props.handler}/>
    </>
    )
}