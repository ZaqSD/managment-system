package com.siaplaouras.managmentsystem.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Data
@Entity
@Transactional
public class Position {
    @Id
    private UUID posNr;
    private String title;
    private String amount;
    private String price;
}
