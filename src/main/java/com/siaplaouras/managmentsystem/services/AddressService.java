package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.repositories.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AddressService {
    final AddressRepository addressRepository;

    public List<Address> getAllAddresses(){
        return addressRepository.findAll();
    }

    public Optional<Address> getAddress(final UUID id){return addressRepository.findById(id);}

    public List<Address> getAddressesByCity(final String city){
        return addressRepository.findByCity(city);
    }
    public List<Address> getAddressesByCountry(final String country){
        return addressRepository.findByCountry(country);
    }
    public List<Address> getAddressesByCityAndCountry(final String city, final String country){
        return addressRepository.findByCityAndCountry(city, country);
    }
    public List<Address> getAddressesByPlz(final String plz){
        return addressRepository.findByPlz(plz);
    }
    public List<Address> getAddressesByCustomerId(final UUID customerId){
        return addressRepository.findByCustomerId(customerId);
    }
    public Address save(final Address address){return addressRepository.save(address);}
    public void delete(final UUID id){addressRepository.deleteById(id);}
}
