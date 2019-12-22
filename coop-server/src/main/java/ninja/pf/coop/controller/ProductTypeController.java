package ninja.pf.coop.controller;

import ninja.pf.coop.entity.ProductType;
import ninja.pf.coop.service.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/product_types")
public class ProductTypeController {

    @Autowired
    private ProductTypeService service;

    @GetMapping
    public List<ProductType> findAll() {
        return service.findAll();
    }

    @GetMapping(value = "{id}")
    public Optional<ProductType> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping(value = "{id}")
    public ProductType update(@RequestBody ProductType item, @PathVariable Long id) {
        item.setId(id);
        return service.save(item);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductType create(@RequestBody ProductType item) {
        return service.save(item);
    }

}
