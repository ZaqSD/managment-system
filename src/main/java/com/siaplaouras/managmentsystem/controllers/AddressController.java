package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.services.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AddressController {
    final AddressService addressService;

    @GetMapping("address")
    public List<Address> getAllAddresses(){
        return addressService.getAllAddresses();
    }

    @GetMapping("address/{id}")
    public Address getAddress(@PathVariable final UUID id){
        return addressService.getAllAddresses().get(1);
    }

    @DeleteMapping("address/{id}")
    public void deleteAddress(@PathVariable final UUID id){
      addressService.delete(id);
    }

    @PostMapping("address")
    public Address postAddress(@RequestBody final Address address){
       return null;
        // return addressService.save(address);
    }
}
