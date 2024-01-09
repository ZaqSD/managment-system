import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, DialogActions, FormControl, MenuItem, TextField } from '@mui/material';
import CreateDialogActions from './CreateDialogActions.tsx';
import DialogAddress from './CreateDialogAddress.tsx';
import { useFetchCustomers as useFetchData } from '../hooks/UseFetchData.tsx';
import { UsePostCustomer } from '../hooks/UsePostCustomer.tsx';

interface Customer{
    id: number
    name: string;
    addresses?: Address[];
  };

interface Address {
    id: number,
    street: string,
    plz: string,
    city: string,
    country: string,
};

interface CreateContentCustomerProps{
    update: boolean;
    customerId?: string;
    handler: () => void;
}

const newCustomer: {
    id?: string
    name: string
    addresses: {street: string, plz: string, city: string, country: string}[]
}[] = [];

function PostAddress(newAddress: {customerId: string, street: string, plz: string, city: string, country: string}) {
    React.useEffect(() => {
        fetch('http://localhost:8080/address', {
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
    }, [newAddress]);
}

function GetAddressesByCustomerId(customerId: string | undefined) {
    const [addresses, setAddresses] = React.useState<Address[]>([]);
    React.useEffect(() => {
        fetch('http://localhost:8080/customer/' + customerId + '/address',
        {method: 'GET'})
            .then((response) => response.json())
            .then((data) => {
                setAddresses(data);
            })
            .catch((err) => {
                console.log(err.message);
            });  
    }, [customerId]);
    return addresses;
  }

export default function CreateContentCustomer(props: CreateContentCustomerProps) {
    const [createName, setCreateName] = React.useState('');
    const [createAddressStreet, setCreateAddressStreet] = React.useState('');
    const [createAddressPlz, setCreateAddressPlz] = React.useState('');
    const [createAddressCity, setCreateAddressCity] = React.useState('');
    const [createAddressCountry, setCreateAddressCountry] = React.useState('');
    const [createAddressNextId, setCreateAddressNextId] = React.useState(useFetchData('http://localhost:8080/customer').length);

    const [addresses] = React.useState([{ street: '', plz: '', city: '', country:'' }]);

    const updateCustomer = useFetchData('http://localhost:8080/customer/' + props.customerId);;
    const [updateAddresses, setUpdateAddresses] = React.useState<Customer[]>([]);

    function PostCustomer() {
        //const [customer, setCustomer] = React.useState<customerProps>();

        fetch('http://localhost:8080/customer', {
        method: 'POST',
        body: JSON.stringify(newCustomer[0]),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
            .then((response) => response.json()) 
            .then((data) => {
                //setCustomer(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
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

    function update() {
        //TODO Call UpdateFunction
        props.handler();
    }

    const submit = () => UsePostCustomer(
        'http://localhost:8080/customer',
        {id: 'Test', name: 'Andreas', addresses: [{id: 'test', street:'Test', plz: '8888', city: 'test', country: 'test'}]}
    );
/*
    function submit() {
        newCustomer.push({
            name: createName,
            addresses: addresses
        });

        //UsePostCustomer('http://localhost:8080/customer', newCustomer[0]);
        UsePostCustomer('http://localhost:8080/customer', {id: 'Test', name: 'Andreas', addresses: [{id: 'test', street:'Test', plz: '8888', city: 'test', country: 'test'}]});
        //PostCustomer();
        props.handler();
    }
*/
    return (
        <>
            <TextField 
                id="newCustomerName" 
                label="Name" 
                variant="outlined" 
                sx={{marginTop: 2}} 
                defaultValue={updateCustomer[0]?.name}
                onChange={event => handleChangeName(event)}
            />
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
                    {addresses.map((address, index) => {
                        if (index !== 0){
                            return(
                                <DialogAddress index={index} street={address.street} plz={address.plz} city={address.city} country={address.country}/> 
                            )
                        } else {
                            return ''
                        }
                    })}
                    </div>
            </Box>
            {/*<CreateDialogActions submit={submit} handler={props.handler} isUpdate={props.update} update={update}/>*/}
            <CreateDialogActions submit={submit} handler={props.handler} isUpdate={props.update} update={update}/>
        </>
    )
}