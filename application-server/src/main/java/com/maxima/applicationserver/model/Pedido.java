package com.maxima.applicationserver.model;

import com.maxima.applicationserver.util.Util;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Data
@Entity
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
@AllArgsConstructor
public class Pedido implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String codigoPedido;

    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    private Cliente cliente;

    @Column(nullable = false)
    private double valorFrete;

    @Column(nullable = false)
    private double valorTotal;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL)
    private Set<ItemPedido> itensPedido = new HashSet<>();

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataCadastro;

    @PrePersist
    private void prePersist() {
        this.dataCadastro = new Date();
        this.codigoPedido = Util.randomString(8);
        this.itensPedido.forEach(i -> i.setPedido(this));
        this.calcularFrete();
    }

    private void calcularFrete() {
        Random random = new Random();
        int itens = this.itensPedido.stream().mapToInt(ItemPedido::getQuantidadeItens).sum();
        this.valorFrete = itens * (random.nextInt(11) + 5);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!super.equals(o))
            return false;
        if (getClass() != o.getClass())
            return false;
        Pedido item = (Pedido) o;
        return this.codigoPedido == item.codigoPedido;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.cliente, this.codigoPedido, this.valorTotal);
    }

}
