package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.transaction.annotation.Transactional;
import com.siaplaouras.managmentsystem.models.Customer;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Transactional
public class Address {
    @Id
    @GeneratedValue
    private UUID id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Customer customer;
    private String street;
    private String plz;
    private String city;
    private String country;
    private Date createdAt = new Date();
}
