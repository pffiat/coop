package ninja.pf.coop.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "REPORT")
public class Report {

    public Report() {    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Report report = (Report) o;
        return Objects.equals(id, report.id) &&
                Objects.equals(title, report.title) &&
                Objects.equals(content, report.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, content);
    }
}
