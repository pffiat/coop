package ninja.pf.coop.service;

import ninja.pf.coop.entity.Report;
import ninja.pf.coop.repo.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

 @Autowired
 ReportRepository reportRepository;

 public List<Report> findAll() {
     return reportRepository.findAll();
 }

 public Optional<Report> findById(Long id) {
     return reportRepository.findById(id);
 }

    public Report create(Report report) {
     return reportRepository.save(report);
    }
}
