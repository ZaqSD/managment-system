package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Transactional
public class Customer {
    @Id
    @GeneratedValue
    private UUID id;
    @Lob
    private String name;
    @Transient
    @OneToMany
    private List<Address> addresses;
    private Date createdAt = new Date();
}
