import React, { useState } from 'react';
import NavBar from "../components/NavBar.tsx";
import CustomerTable from "../components/CustomerTable.tsx";
import OfferTable from "../components/OfferTable.tsx";
import Container from '@mui/material/Container';

import "../../src/index.css";
import { Button } from '@mui/material';
import CreateDialog from '../components/CreateDialog.tsx';

export default function Home() {
    const [page, setPage] = useState("customers");
    const [openCreateDialog, setOpenCreateDialog] = useState(false)

    let table;
    if (page === "customers"){
        table = <CustomerTable />;
    } else if (page === "offers"){
        table = <OfferTable />;
    }

    function handleCreateDialog(){
        setOpenCreateDialog(!openCreateDialog);
    }

    return(
        <>
            <NavBar setPage={setPage}/>
            <Container>
                <CreateDialog open={openCreateDialog} page={page} handler={handleCreateDialog}/>
                <Button onClick={() => handleCreateDialog()} variant='contained' color='primary' sx={{height: 40, width: 100, margin: 2, marginLeft: 0}}>Create</Button>
                {table}
            </Container>
        </>)
}