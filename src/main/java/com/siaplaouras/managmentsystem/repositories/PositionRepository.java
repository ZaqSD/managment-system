package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PositionRepository extends JpaRepository<Position, UUID> {
    List<Position> findByPosNr(final UUID posNr);

}
