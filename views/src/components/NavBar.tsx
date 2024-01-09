import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface NavBarProps {
  setPage: (page: string) => void;
}
export default function NavBar(props: NavBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: 'white', color: 'black'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Managment System
          </Typography>
          <Button color="inherit" onClick={() => props.setPage('customer')} >Customers</Button>
          <Button color="inherit" onClick={() => props.setPage('offer')} >Offers</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
