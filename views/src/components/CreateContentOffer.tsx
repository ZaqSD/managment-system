import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, DialogActions, FormControl, MenuItem, TextField } from '@mui/material';
import CreateDialogActions from './CreateDialogActions.tsx';

interface CreateContentOfferProps{
    update?: boolean;
    offerId?: string;
    handler: () => void;
}

export default function CreateContentOffer(props: CreateContentOfferProps) {
    const [createType, setCreateType] = React.useState('');
    const [createCustomer, setCreateCustomer] = React.useState('');
    const [createAddress, setCreateAddress] = React.useState('');

    const [createPositionName, setCreatePositionName] = React.useState('');
    const [createPositionAmount, setCreatePositionAmount] = React.useState('');
    const [createPositionPrice, setCreatePositionPrice] = React.useState('');
    const [createPositionNextId, setCreatePositionNextId] = React.useState(1);
    const [isAddressDisabled, SetIsAddressDisabled] = React.useState(true);

    const addresses: { address: string }[] = [];
    const [positions, setPositions] = React.useState([{ id: 0, name: '', amount: '', price: '' }]);
    const newOffer: {
        type: string,
        customer: string,
        address: string,
        positions: [{ name: string, amount: string, price: string }]
    }[] = [];

    function addPosition(){
        setPositions([
            ...positions, { id: createPositionNextId, name: createPositionName, amount: createPositionAmount, price: createPositionPrice }
        ]);
        setCreatePositionNextId(createPositionNextId + 1);
    }

    function handleChangeNewOfferType(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateType(event.target.value as string);
    }

    function handleChangeNewOfferCustomer(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateCustomer(event.target.value as string);
        SetIsAddressDisabled(false);
        getAddresses(Number(event.target.value));
    }

    function handleChangeNewOfferAddress(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreateAddress(event.target.value as string);
    }

    function handleChangeNewPositionName(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreatePositionName(event.target.value as string);
    }
    
    function handleChangeNewPositionAmount(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreatePositionAmount(event.target.value as string);
    }
    
    function handleChangeNewPositionPrice(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setCreatePositionPrice(event.target.value as string);
    }

    //TODO Placeholder
    function getAddresses(id: number){
        const addressesReturn = [
            {street: 'Beispielallee 10A', plz: '8048', city: 'Zurich', country: 'Switzerland'},
            {street: '605 La Cienega', plz: 'CA-90012', city: 'Culver City', country: 'USA'}
        ];
        addressesReturn.forEach((address) => {
            const tempAddress = address.street + ', ' + address.plz + ', ' + address.city + ', ' + address.country;
            addresses.push({address: tempAddress});
        })
        return addresses;
    }

    function submit() {
        newOffer.push({
            type: createType,
            customer: createCustomer,
            address: createAddress,
            positions: [{
                name: createPositionName,
                amount: createPositionAmount,
                price: createPositionPrice
            }]
        });
        props.handler();
    }

    return (
        <>
            <TextField
                id="newOfferType"
                label="Type"
                sx={{ marginTop: 2}}
                onChange={event => handleChangeNewOfferType(event)}
                select
                >
                    <MenuItem value={'offer'}>Offer</MenuItem>
                    <MenuItem value={'order'}>Order</MenuItem>
                    <MenuItem value={'invoice'}>Invoice</MenuItem>
            </TextField>
            {/*TODO Placeholder*/}
            <TextField
                id="newOfferCustomer"
                label="Customer"
                sx={{ marginTop: 2}}
                onChange={event => handleChangeNewOfferCustomer(event)}
                select
                >
                    <MenuItem value={'1'}>Customer 1</MenuItem>
                    <MenuItem value={'2'}>Customer 2</MenuItem>
                    <MenuItem value={'3'}>Customer 3</MenuItem>
            </TextField>
            <TextField
                id="newOfferAddress"
                label="Address"
                sx={{ marginTop: 2}}
                onChange={event => handleChangeNewOfferAddress(event)}
                select
                disabled={isAddressDisabled}
                >
                {getAddresses(1).map((address) => (
                    <MenuItem value={address.address}>{address.address}</MenuItem>
                ))}
            </TextField>
            <Box sx={{backgroundColor: '#F6F6F6', borderRadius: 4, padding: 2, paddingTop: 1, marginTop: 1}}>
            <Typography sx={{marginLeft: 0.5, marginTop: 1, fontSize: 20, fontWeight: 600}}>Positions</Typography>
                <TextField
                    id="newOfferName"
                    label="Name"
                    variant="outlined"
                    onChange={event => handleChangeNewPositionName(event)}
                    sx={{marginTop: 2, width: '100%'}}
                />
                <TextField
                    id="newOfferAmount"
                    label="Amount"
                    variant="outlined"
                    onChange={event => handleChangeNewPositionAmount(event)}
                    sx={{marginTop: 2, marginRight: '2%', width: '28%'}}
                />
                <TextField
                    id="newOfferPrice"
                    label="Price"
                    variant="outlined"
                    defaultValue={'0.00'}
                    onChange={event => handleChangeNewPositionPrice(event)}
                    sx={{marginTop: 2, marginRight: '2%', width: '40%'}}
                />
                <Button
                    variant='outlined'
                    color='primary'
                    sx={{height: 55, width: '28%', marginTop: 2, marginLeft: 0, fontSize: 16, fontWeight: 600}}
                    onClick={() => addPosition()}
                >Add</Button>
                <div>
                    {positions.map(position => {
                        if(position.id !== 0){
                            return(
                                <p className=''><b>{position.id} |</b> {position.name}, {position.amount}x, {position.price}</p>
                            )
                        } else {return ''}
                    })}
                </div>
            </Box>
        <CreateDialogActions submit={submit} handler={props.handler}/>
    </>
    )
}