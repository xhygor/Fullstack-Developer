package com.maxima.applicationserver.repository;

import com.maxima.applicationserver.interfaces.IRepository;
import com.maxima.applicationserver.model.Pedido;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositório de Pedido
 *
 * @see JpaRepository
 */
@Repository
public interface PedidoRepository extends IRepository<Pedido, Integer> {
    Page<Pedido> findByCodigoPedido(String codigoPedido, Pageable pageable);
}
