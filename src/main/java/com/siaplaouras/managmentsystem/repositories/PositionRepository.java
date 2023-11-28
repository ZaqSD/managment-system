package com.siaplaouras.managmentsystem.repositories;

import com.siaplaouras.managmentsystem.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface PositionRepository extends JpaRepository<Position, UUID> {
    List<Position> findByPosNr(final UUID posNr);

}
