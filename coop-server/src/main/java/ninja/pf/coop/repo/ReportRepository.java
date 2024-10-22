package ninja.pf.coop.repo;

import ninja.pf.coop.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
}
