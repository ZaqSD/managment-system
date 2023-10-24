package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    List<Customer> findByName(final String name);
}
