package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.models.Customer;
import com.siaplaouras.managmentsystem.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerService {
    final CustomerRepository customerRepository;
    public Optional<Customer> getCustomer(final UUID id){return customerRepository.findById(id);}
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }
    public List<Customer> getCustomersByName(final String name){
        return customerRepository.findByName(name);
    }
    public Customer save(final Customer customer){return customerRepository.save(customer);}
    public void delete(final UUID id){customerRepository.deleteById(id);}
}
