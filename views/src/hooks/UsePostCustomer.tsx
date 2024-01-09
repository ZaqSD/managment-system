import { useEffect } from 'react';

interface Address {
  id: string,
  street: string,
  plz: string,
  city: string,
  country: string,
};

interface Customer {
  id: string,
  name: string,
  addresses?: Address[]
};

export const UsePostCustomer: (url: string, customer: Customer) => void = (url: string, customer: Customer) => {
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
      })
          .then((response) => {response.json(); console.log(response);})
          .catch((err) => {
              console.log(err.message);
          });
}, [url, customer]);

 };