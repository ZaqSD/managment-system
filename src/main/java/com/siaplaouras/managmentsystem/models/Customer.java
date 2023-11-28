package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    @OneToMany
    private List<Address> addresses = new ArrayList<>();
    private Date createdAt = new Date();
}
