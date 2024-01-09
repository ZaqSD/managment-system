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

export const useFetchCustomers: (url: string) => Customer[] = (url: string) => {
  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log(data);
    };
    fetchData();
  }, [data, url]);
  return data;
 };