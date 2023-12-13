import { Box, Fade } from '@mui/material';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface createDialogActionsProps{
    index: number;
    street: string;
    plz: string;
    city: string;
    country: string;
}
export default function CreateDialogActions(props: createDialogActionsProps) {
    const [isHover, setisHover] = React.useState(false);

    return (
        <Box
            sx={{display: 'flex', flexDirection: 'row', width: '100%', maxHeight: 35}}
            onMouseOver={() => setisHover(true)}
            onMouseOut={() => setisHover(false)}
        >
            <p><b>{props.index} |</b> {props.street}, {props.plz}, {props.city}, {props.country}</p>
            {isHover === true ? 
            (<Fade in={true}>
                <IconButton sx={{marginLeft: 1, marginTop: 1.3, maxHeight: 30}} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Fade>): ''}

        </Box>
    )
}