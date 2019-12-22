package ninja.pf.coop.service;

import ninja.pf.coop.entity.ProductType;
import ninja.pf.coop.repo.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductTypeService {

    @Autowired
    private ProductTypeRepository repository;

    public List<ProductType> findAll() {
        return repository.findAll();
    }

    public Optional<ProductType> findById(Long id) {
        return repository.findById(id);
    }

    public ProductType save(ProductType club) {
        return repository.save(club);
    }
}
