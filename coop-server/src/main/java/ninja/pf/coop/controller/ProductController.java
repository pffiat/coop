package ninja.pf.coop.controller;

import ninja.pf.coop.entity.Product;
import ninja.pf.coop.entity.ProductType;
import ninja.pf.coop.service.ProductService;
import ninja.pf.coop.service.ProductTypeService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @Autowired
    private ProductTypeService productTypeService;


    @GetMapping
    public List<Product> findAll() {
        LoggerFactory.getLogger(this.getClass()).info(service.findAll().toString());
        return service.findAll();
    }

    @GetMapping(value = "{id}")
    public Optional<Product> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping(value = "{id}")
    public Product update(@RequestBody Product item, @PathVariable Long id) {
        item.setId(id);
        return service.save(item);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product item) {
        LoggerFactory.getLogger(this.getClass()).info(item.toString());
        item.setProductType(
                productTypeService.findById(item.getProductType().getId())
                                    .orElseThrow(IllegalArgumentException::new));
        item.setLoanProducts(new HashSet<>());
        LoggerFactory.getLogger(this.getClass()).info(item.toString());
        return service.save(item);
    }
}
