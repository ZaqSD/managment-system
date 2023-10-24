package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Transactional
public class Position {
    @Id
    private UUID posNr;
    private String title;
    @Lob
    private String description;
    private double amount;
    private double price;
    private Date createdAt = new Date();

}
