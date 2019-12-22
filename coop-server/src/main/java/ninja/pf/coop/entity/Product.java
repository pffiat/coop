package ninja.pf.coop.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name= "PRODUCT")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reference;
    private LocalDate entryDate;
    private String productCondition;
    private String detail;

    @OneToMany(mappedBy = "product")
    Set<LoanProduct> loanProducts;

    @ManyToOne
    @JoinColumn(name = "product_type_id")
    private ProductType productType;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(id, product.id) &&
                Objects.equals(reference, product.reference) &&
                Objects.equals(entryDate, product.entryDate) &&
                Objects.equals(productCondition, product.productCondition) &&
                Objects.equals(detail, product.detail) &&
                Objects.equals(productType, product.productType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, reference, entryDate, productCondition, detail, productType);
    }

    public Set<LoanProduct> getLoanProducts() {
        return loanProducts;
    }

    public void setLoanProducts(Set<LoanProduct> loanProducts) {
        this.loanProducts = loanProducts;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public String getProductCondition() {
        return productCondition;
    }

    public void setProductCondition(String condition) {
        this.productCondition = condition;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", reference='" + reference + '\'' +
                ", entryDate=" + entryDate +
                ", productCondition='" + productCondition + '\'' +
                ", detail='" + detail + '\'' +
                ", loanProducts=" + loanProducts +
                ", productType=" + productType +
                '}';
    }
}
