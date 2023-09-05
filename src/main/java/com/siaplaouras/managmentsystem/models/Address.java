package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Data
@Entity
@Transactional
public class Address {
    @Id
    @GeneratedValue
    private UUID id;
    @Lob
    private String street;
    private String plz;
    private String city;
    private String state;
    private String country;
}
