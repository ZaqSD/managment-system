package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Offer;
import com.siaplaouras.managmentsystem.services.OfferService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class OfferController {
    final OfferService offerService;

    @GetMapping("offer")
    public List<Offer> getAllOffers(){
        return offerService.getAllOffers();
    }

    @GetMapping("offer/{id}")
    public ResponseEntity<Offer> getOffer(@PathVariable final UUID id){
        final var offer = offerService.getOffer(id);
        if(offer.isPresent()){
            return ResponseEntity.ok(offer.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("offer/{id}")
    public void deleteOffer(@PathVariable final UUID id){
        offerService.delete(id);
    }

    @PostMapping("offer")
    public Offer postOffer(@RequestBody final Offer offer){
        return offerService.save(offer);
    }
}
