package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Position;
import com.siaplaouras.managmentsystem.services.PositionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PositionController {
    final PositionService positionService;

    @GetMapping("position")
    public List<Position> getAllCustomers(){
        return positionService.getAllPositions();
    }

    @GetMapping("position/{id}")
    public ResponseEntity<Position> getPosition(@PathVariable final UUID id){
        final var position = positionService.getPosition(id);
        if(position.isPresent()){
            return ResponseEntity.ok(position.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("position/{id}")
    public void deletePosition(@PathVariable final UUID id){
        positionService.delete(id);
    }

    @PostMapping("position")
    public Position postPosition(@RequestBody final Position position){
        return positionService.save(position);
    }
}
