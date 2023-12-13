package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.services.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Address> getAddress(@PathVariable final UUID id){
        final var address = addressService.getAddress(id);
        if(address.isPresent()){
            return ResponseEntity.ok(address.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("customer/{id}/address")
    public ResponseEntity<List<Address>> getAddressesbyCustomerId(@PathVariable final UUID id){
        final var addresses = addressService.getAddressesByCustomerId(id);
        if(addresses != null){
            return ResponseEntity.ok(addresses);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("address/{id}")
    public void deleteAddress(@PathVariable final UUID id){
      addressService.delete(id);
    }

    @PostMapping("address")
    public ResponseEntity<Address> postAddress(@RequestBody final Address address){
        return ResponseEntity.ok(addressService.save(address));
    }
}
