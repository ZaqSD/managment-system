package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Customer;
import com.siaplaouras.managmentsystem.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerService {
    final CustomerRepository customerRepository;

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public List<Customer> getCustomersByName(final String name){
        return customerRepository.findByName(name);
    }
}
