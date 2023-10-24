package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.models.Offer;
import com.siaplaouras.managmentsystem.repositories.OfferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class OfferService {
    final OfferRepository offerRepository;

    public List<Offer> getAllOffers(){
        return offerRepository.findAll();
    }
    public Optional<Offer> getOffer(final UUID id){return offerRepository.findById(id);}
    public List<Offer> getOffersByType(final String type){
        return offerRepository.findByType(type);
    }
    public Offer save(final Offer offer){return offerRepository.save(offer);}
    public void delete(final UUID id){offerRepository.deleteById(id);}
}
