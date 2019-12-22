package ninja.pf.coop.controller;


import ninja.pf.coop.entity.Report;
import ninja.pf.coop.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/reports")
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping
    @PreAuthorize("hasRole('REFERENT')")
    public List<Report> findAll() {
        return reportService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<Report> findById(@PathVariable Long id) {
        return reportService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Report create(@RequestBody Report report) {
        return reportService.create(report);
    }
}
