package com.maxima.applicationserver.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Data
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
public class ItemPedido implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private int quantidadeItens;

    @Column(nullable = false)
    private double subTotal;

    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    private Produto produto;

    @JsonIgnore
    @ManyToOne(optional = false)
    private Pedido pedido;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!super.equals(o))
            return false;
        if (getClass() != o.getClass())
            return false;
        ItemPedido item = (ItemPedido) o;
        return this.produto == item.produto;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.pedido, this.produto);
    }
}
