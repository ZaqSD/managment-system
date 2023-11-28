package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface OfferRepository extends JpaRepository<Offer, UUID> {
    List<Offer> findByType(final String type);
}
