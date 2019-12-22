package ninja.pf.coop.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class LoanProduct {

    @EmbeddedId
    LoanProductKey id;

    @ManyToOne
    @MapsId("loan_id")
    @JoinColumn(name = "loan_id")
    Loan loan;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    Product product;

    private String detail;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LoanProduct that = (LoanProduct) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(loan, that.loan) &&
                Objects.equals(product, that.product) &&
                Objects.equals(detail, that.detail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, loan, product, detail);
    }

    public LoanProductKey getId() {
        return id;
    }

    public void setId(LoanProductKey id) {
        this.id = id;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String comment) {
        this.detail = comment;
    }
}
