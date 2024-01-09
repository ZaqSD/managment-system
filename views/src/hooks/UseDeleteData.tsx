import { useState, useEffect } from 'react';

interface Address {
  id: number,
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

export const useDeleteData: (id: string) => void = (id: string) => {
  useEffect(() => {
    fetch('http://localhost:8080/customer/' + id, { method: 'DELETE' });
}, [id]);
//  return data;
 };