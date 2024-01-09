import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import CreateContentCustomer from './CreateContentCustomer.tsx';
import CreateContentOffer from './CreateContentOffer.tsx';

export interface CreateDialogProps {
//CreateProps
    open: boolean;
    page: string;
    handler: () => void;
//UpdateProps
    update: boolean;
    customerId?: string;
    offerId?: string;
}

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

function GetAddresses(customerId: string) {
    const [addresses, setAddresses] = React.useState<addressProps[]>([]);

      fetch('http://localhost:8080/customer/' + customerId + '/address',
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

export default function CreateDialog(props: CreateDialogProps) { 
    const [createType, setCreateType] = React.useState(props.page);
        
    function getContent() {
        if (createType === 'customer'){
            return <CreateContentCustomer handler={props.handler} update={props.update} customerId={props.customerId}/>
        } else if (createType === 'offer'){
            return <CreateContentOffer handler={props.handler} update={props.update} offerId={props.offerId}/>
        } else {
            return ''
        }
    };

    function handleChange(event: SelectChangeEvent){
        setCreateType(event.target.value as string);
      };

    return (
        <Dialog open={props.open}>
        <DialogTitle>Create something</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="CreateTypeLabel">Create a new what</InputLabel>
                    <Select
                        labelId="CreateTypeLabel"
                        id="CreateTypeSelect"
                        defaultValue={props.page}
                        label="Create a new what"
                        onChange={event => handleChange(event)}
                        sx={{minWidth: 552, marginRight: 2}}
                        disabled={props.update}
                    >
                        <MenuItem value={'customer'}>Customer</MenuItem>
                        <MenuItem value={'offer'}>Offer</MenuItem>
                    </Select>
                    {getContent()}
                </FormControl>
            </DialogContent>
        </Dialog>
    );
}