import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import CreateContentCustomer from './CreateContentCustomer.tsx';
import CreateContentOffer from './CreateContentOffer.tsx';

export interface SimpleDialogProps {
  open: boolean;
  page: string;
  handler: () => void;
}

export default function CreateDialog(props: SimpleDialogProps) {
    const [createType, setCreateType] = React.useState(props.page);

    function getContent() {
        if (createType === 'customer'){
            return <CreateContentCustomer handler={props.handler}/>
        } else if (createType === 'offer'){
            return <CreateContentOffer handler={props.handler}/>
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
                    <InputLabel id="demo-simple-select-label">Create a new what</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={props.page}
                        label="Create a new what"
                        onChange={event => handleChange(event)}
                        sx={{minWidth: 552, marginRight: 2}}
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