package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Position;
import com.siaplaouras.managmentsystem.repositories.PositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PositionService {
    final PositionRepository positionRepository;

    public List<Position> getAllPositions(){
        return positionRepository.findAll();
    }

    public List<Position> getPositionsByPosNr(final UUID posNr){
        return positionRepository.findByPosNr(posNr);
    }

}
