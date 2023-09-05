package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Offer;
import com.siaplaouras.managmentsystem.repositories.OfferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class OfferService {
    final OfferRepository offerRepository;

    public List<Offer> getAllOffers(){
        return offerRepository.findAll();
    }

    public List<Offer> getOffersByType(final String type){
        return offerRepository.findByType(type);
    }
}
