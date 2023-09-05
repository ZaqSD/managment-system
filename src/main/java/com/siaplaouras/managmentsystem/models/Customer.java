package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Data
@Entity
@Transactional
public class Customer {
    @Id
    @GeneratedValue
    private int id;
    @Lob
    private String name;
    @Transient
    @OneToMany
    private List<Address> addresses;
}
