package ninja.pf.coop.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "LOAN")
public class Loan {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "loan")
    Set<LoanProduct> loanProducts;

    private String detail;

    private LocalDate beginning;
    private LocalDate ending;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Loan loan = (Loan) o;
        return Objects.equals(id, loan.id) &&
                Objects.equals(user, loan.user) &&
                Objects.equals(loanProducts, loan.loanProducts) &&
                Objects.equals(detail, loan.detail) &&
                Objects.equals(beginning, loan.beginning) &&
                Objects.equals(ending, loan.ending);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, loanProducts, detail, beginning, ending);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<LoanProduct> getLoanProducts() {
        return loanProducts;
    }

    public void setLoanProducts(Set<LoanProduct> loanProducts) {
        this.loanProducts = loanProducts;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public LocalDate getBeginning() {
        return beginning;
    }

    public void setBeginning(LocalDate beginning) {
        this.beginning = beginning;
    }

    public LocalDate getEnding() {
        return ending;
    }

    public void setEnding(LocalDate ending) {
        this.ending = ending;
    }
}
