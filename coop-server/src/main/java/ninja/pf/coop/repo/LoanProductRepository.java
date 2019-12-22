package ninja.pf.coop.repo;

import ninja.pf.coop.entity.LoanProduct;
import ninja.pf.coop.entity.LoanProductKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanProductRepository extends JpaRepository<LoanProduct, LoanProductKey> {
}
