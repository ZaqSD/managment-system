import React from 'react';
import NavBar from "../components/NavBar.tsx";
import Table from "../components/Table.tsx";
import Container from '@mui/material/Container';

import "../../src/index.css";

export default function Customers() {
    const categories = [{name: 'id'}, {name: 'name'}, {name: 'addresses'}]
    const [page, setPage] = 'customers';

    function getAddresses(id) {
        const addresses = [{street: 'Beispielallee 10', plz: '8048', city: 'Zurich', country: 'Switzerland'}]
        return addresses;
    }

    function getCustomers(){
        const users = [
            {id: 1, name: 'Andreas Siaplaouras'},
            {id: 2, name: 'Beispiel Human'}
        ]
        return users;
    }
    
    return(
        <>
            <NavBar />
            <Container>
                <Table categories={categories} page={page} getCustomers={getCustomers} getAddresses={getAddresses}/>
            </Container>
        </>)
}