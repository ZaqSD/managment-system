package com.siaplaouras.managmentsystem.services;

import com.siaplaouras.managmentsystem.models.Address;
import com.siaplaouras.managmentsystem.models.Position;
import com.siaplaouras.managmentsystem.repositories.PositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PositionService {
    final PositionRepository positionRepository;

    public List<Position> getAllPositions(){
        return positionRepository.findAll();
    }
    public Optional<Position> getPosition(final UUID id){return positionRepository.findById(id);}
    public List<Position> getPositionsByPosNr(final UUID posNr){
        return positionRepository.findByPosNr(posNr);
    }
    public Position save(final Position position){return positionRepository.save(position);}
    public void delete(final UUID id){positionRepository.deleteById(id);}
}
