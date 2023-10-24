package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OfferRepository extends JpaRepository<Offer, UUID> {
    List<Offer> findByType(final String type);
}
