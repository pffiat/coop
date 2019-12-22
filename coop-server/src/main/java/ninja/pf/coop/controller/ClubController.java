package ninja.pf.coop.controller;


import ninja.pf.coop.entity.Club;
import ninja.pf.coop.service.ClubService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/public/clubs")
public class ClubController {

    @Autowired
    ClubService clubService;

    @GetMapping
    public List<Club> findAll() {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return clubService.findAll();
    }

    @GetMapping(value = "{id}")
    public Optional<Club> findById(@PathVariable Long id) {
        return clubService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Club create(@RequestBody Club club) {
        return clubService.create(club);
    }
}
