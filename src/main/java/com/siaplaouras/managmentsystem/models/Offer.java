package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Transactional
public class Offer {
    @Id
    private int id;
    private String type;
    @Transient
    private Customer customer;
    @Transient
    private Address address;
    @Transient
    private List<Position> positions;
    private Date createdAt = new Date();

}
