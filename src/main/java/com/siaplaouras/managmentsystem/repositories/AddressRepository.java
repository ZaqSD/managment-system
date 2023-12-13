package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {
    List<Address> findByCity(final String city);
    List<Address> findByCityAndCountry(final String city, final String country);
    List<Address> findByPlz(final String plz);
    List<Address> findByCountry(final String country);
    List<Address> findByCustomerId(final UUID customerId);
}
