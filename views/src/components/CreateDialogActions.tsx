import { Button, Box, DialogActions } from "@mui/material";
import React from "react";

interface CreateDialogActionsProps{
    submit: () => void;
    handler: () => void;
}

export default function CreateDialogActions(props: CreateDialogActionsProps) {
    return (
        <Box sx={{marginTop: 2}}>
            <Button variant='outlined' color='primary' onClick={() => props.handler()} sx={{width: '48%', height: 40,float: 'left', fontWeight: '700'}}>Cancel</Button>
            <Button 
                variant='contained'
                color='primary'
                onClick={props.submit}
                sx={{width: '48%', height: 40, float: 'right', fontWeight: '700'}}
            >Save</Button>
        </Box>
    )
}