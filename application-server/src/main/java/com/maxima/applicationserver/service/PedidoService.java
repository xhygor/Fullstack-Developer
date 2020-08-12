package com.maxima.applicationserver.service;

import com.maxima.applicationserver.interfaces.IService;
import com.maxima.applicationserver.model.Pedido;
import com.maxima.applicationserver.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@Transactional(rollbackFor = Throwable.class)
public class PedidoService implements IService<Pedido, Integer> {

    @Autowired
    private PedidoRepository repository;

    @Override
    public Pedido create(Pedido pedido) {
        return repository.save(pedido);
    }

    @Override
    public List<Pedido> read() {
        return repository.findAll();
    }

    @Override
    public Pedido read(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Pedido %d", id)));
    }

    @Override
    public Page<Pedido> read(String codigoPedido, Pageable pageable) {
        if (StringUtils.hasText(codigoPedido)) {
            return repository.findByCodigoPedido(codigoPedido, pageable);
        } else {
            return repository.findAll(pageable);
        }
    }

    @Override
    public void update(Pedido pedido) {
        repository.save(pedido);
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }
}
