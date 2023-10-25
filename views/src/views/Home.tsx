import React, { useState } from 'react';
import NavBar from "../components/NavBar.tsx";
import CustomerTable from "../components/CustomerTable.tsx";
import OfferTable from "../components/OfferTable.tsx";
import Container from '@mui/material/Container';

import "../../src/index.css";
import { Button } from '@mui/material';

export default function Home() {
    const [page, setPage] = useState("customers");

    let table;
    if (page === "customers"){
        table = <CustomerTable />;
    } else if (page === "offers"){
        table = <OfferTable />;
    }
    return(
        <>
            <NavBar setPage={setPage}/>
            <Container>
                <Button onClick={() => setPage('offers')} sx={{height: 90}}>Click</Button>
                {table}
            </Container>
        </>)
}