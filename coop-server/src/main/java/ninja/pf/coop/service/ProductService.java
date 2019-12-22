package ninja.pf.coop.service;

import ninja.pf.coop.entity.Product;
import ninja.pf.coop.entity.ProductType;
import ninja.pf.coop.repo.ProductRepository;
import ninja.pf.coop.repo.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {


    @Autowired
    private ProductRepository repository;

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return repository.findById(id);
    }

    public Product save(Product item) {
        return repository.save(item);
    }
}
