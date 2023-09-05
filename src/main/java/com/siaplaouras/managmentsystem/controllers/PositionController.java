package com.siaplaouras.managmentsystem.controllers;

import com.siaplaouras.managmentsystem.models.Position;
import com.siaplaouras.managmentsystem.services.PositionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Position getPosition(@PathVariable final UUID id){
        return positionService.getAllPositions().get(1);
    }

    @DeleteMapping("position/{id}")
    public void deletePosition(@PathVariable final UUID id){
        //  positionService.delete(id);
    }

    @PostMapping("position")
    public Position postPosition(@RequestBody final Position position){
        return null;
        // return positionService.save(position);
    }
}
