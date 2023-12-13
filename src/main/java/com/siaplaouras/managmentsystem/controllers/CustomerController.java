package com.siaplaouras.managmentsystem.controllers;

import com.google.common.base.Strings;
import com.siaplaouras.managmentsystem.models.Customer;
import com.siaplaouras.managmentsystem.services.AddressService;
import com.siaplaouras.managmentsystem.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerController {
    final CustomerService customerService;
    final AddressService addressService;

    @GetMapping("customer")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<Object> getCustomer(@PathVariable final UUID id){
        final var customer = customerService.getCustomer(id);
        if(customer.isPresent()){
            return ResponseEntity.ok(customer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("customer/{id}")
    public void deleteCustomer(@PathVariable final UUID id){
        customerService.delete(id);
    }

    @PostMapping("customer")
    public ResponseEntity<Customer> postCustomer(@RequestBody final Customer customer){
        var customerResponse = customerService.save(customer);
        customer.getAddresses().forEach((address -> {
            if(!Strings.isNullOrEmpty(address.getCity()) && !Strings.isNullOrEmpty(address.getPlz()) && !Strings.isNullOrEmpty(address.getCountry()) && !Strings.isNullOrEmpty(address.getStreet())){
                address.setCustomerId(customerResponse.getId());
                addressService.save(address);
            }
        }));
        return ResponseEntity.ok(customerResponse);
    }
}
