import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, DialogActions, FormControl, MenuItem, TextField } from '@mui/material';
import CreateDialogActions from './CreateDialogActions.tsx';

interface CreateContentCustomerProps{
    handler: () => void;
}

export default function CreateContentCustomer(props: CreateContentCustomerProps) {
    const [createName, setCreateName] = React.useState('');
    const [createAddressStreet, setCreateAddressStreet] = React.useState('');
    const [createAddressPlz, setCreateAddressPlz] = React.useState('');
    const [createAddressCity, setCreateAddressCity] = React.useState('');
    const [createAddressCountry, setCreateAddressCountry] = React.useState('');
    const [createAddressNextId, setCreateAddressNextId] = React.useState(1);

    const [addresses, setAddresses] = React.useState([{ id: 0, street: '', plz: '', city: '', country:'' }]);

    const newCustomer: {
        name: string,
        addresses: [{street: string, plz: string, city: string, country: string}],
    }[] = [];

    function addAddress(){
        setAddresses([
            ...addresses, { id: createAddressNextId, street: createAddressStreet, plz: createAddressPlz, city: createAddressCity, country: createAddressCountry }
        ]);
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
            addresses: [{
                street: createAddressStreet,
                plz: createAddressPlz,
                city: createAddressCity,
                country: createAddressCountry
            }]
        });
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
                        if(address.id !== 0){
                            return(
                                <p className=''><b>{address.id} |</b> {address.street}, {address.plz}, {address.city}, {address.country}</p>
                            )
                        } else {return ''}
                    })}
                </div>
        </Box>
        <CreateDialogActions submit={submit} handler={props.handler}/>
    </>
    )
}