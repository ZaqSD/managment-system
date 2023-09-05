package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Customer;
import com.siaplaouras.managmentsystem.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerController {
    final CustomerService customerService;

    @GetMapping("customer")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("customer/{id}")
    public Customer getCustomer(@PathVariable final UUID id){
        return customerService.getAllCustomers().get(1);
    }

    @DeleteMapping("customer/{id}")
    public void deleteCustomer(@PathVariable final UUID id){
        //  customerService.delete(id);
    }

    @PostMapping("customer")
    public Customer postCustomer(@RequestBody final Customer customer){
        return null;
        // return customerService.save(customer);
    }
}
