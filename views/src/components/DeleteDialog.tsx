import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Button, DialogContent, Typography } from '@mui/material';

interface DeleteDialogProps {
    open: boolean;
    handler: () => void;
    id: string;
    name: string;
    type: string;
}

const Remove = (id: string, handler: () => void) => {
    //TODO: Put in seperate file
    //useDeleteData(id);
    fetch('http://localhost:8080/customer/' + id, { method: 'DELETE' });
    handler();
}

export default function DeleteDialog(props: DeleteDialogProps) { 
    const [toastOpen, setToastOpen] = React.useState(true);

    function toastHandler() {
        setToastOpen(!toastOpen);
    }
    
    return (
    <Dialog open={props.open}>
        <DialogTitle>Create something</DialogTitle>
            <DialogContent>
                <Typography>{'Are you sure you want to delete '}<b>{props.name}</b></Typography> 
            </DialogContent>
            <Box>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => props.handler()}
                    sx={{width: '44%', height: 40,float: 'left', fontWeight: '700', marginLeft: '4%', marginBottom: 2}}>Cancel</Button>
                <Button 
                    variant='contained'
                    color='error'
                    onClick={() => Remove(props.id, props.handler)}
                    sx={{width: '44%', height: 40, float: 'right', fontWeight: '700', marginRight: '4%', marginBottom: 2}}
                >Delete</Button>
            </Box>
        </Dialog>
    );
}