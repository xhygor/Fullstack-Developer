package com.maxima.applicationserver.controller;

import com.maxima.applicationserver.interfaces.IController;
import com.maxima.applicationserver.model.Pedido;
import com.maxima.applicationserver.service.PedidoService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "/api/pedidos")
public class PedidoController extends DefaultController implements IController<Pedido, Integer> {

    @Autowired
    private PedidoService service;

    /**
     * Armazena uma {@link Pedido} no sistema
     *
     * @param pedido Representação do recurso
     * @return ResponseEntity pedido
     */
    @Override
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> create(@Valid @RequestBody Pedido pedido) {
        log.trace("Criando pedido {}", pedido);
        pedido = service.create(pedido);
        HttpHeaders responseHeaders = getHttpHeaders(pedido.getId());
        return ResponseEntity.status(HttpStatus.CREATED).headers(responseHeaders).body(pedido);
    }

    /**
     * Retorna um {@link Pedido} pelo identificador informado
     *
     * @param id Identificador do recurso
     * @return
     */
    @Override
    @GetMapping(path = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> read(@PathVariable Integer id) {
        log.trace("Buscando pedido por identificador {}", id);
        Pedido pedido = service.read(id);
        HttpHeaders responseHeaders = getHttpHeaders(pedido.getId());
        return ResponseEntity.ok().headers(responseHeaders).body(pedido);
    }

    /**
     * Pesquisa um registro de {@link Pedido} baseado em uma descrição
     *
     * @param codigoPedido Campo a ser pesquisado
     * @param page         Página inicial
     * @param size         Tamanho da paginação
     * @return
     */
    @Override
    @GetMapping(path = "/page", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> read(@RequestParam(required = false) String codigoPedido,
                                  @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "20") Integer size) {
        Page<Pedido> list = service.read(codigoPedido, PageRequest.of(page, size));
        ResponseHeaderPaginable responseHeaderPaginable = new ResponseHeaderPaginable(page, list);
        responseHeaderPaginable.invoke();
        HttpStatus status = responseHeaderPaginable.getStatus();
        return ResponseEntity.status(status).header(CONTENT_RANGE_HEADER, responseHeaderPaginable.responsePageRange())
                .body(list);
    }

    /**
     * Pesquisa todos os registros de {@link Pedido}
     *
     * @return
     */
    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> read() {
        List<Pedido> list = service.read();
        return ResponseEntity.ok().body(list);
    }

    /**
     * Atualização registro de um {@link Pedido}
     *
     * @param id     Identificador do recurso
     * @param pedido Representação do recurso
     * @return
     */
    @Override
    @PutMapping(path = "/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @RequestBody Pedido pedido) {
        log.trace("Alterando pedido {}", pedido);
        pedido.setId(id);
        service.update(pedido);
        HttpHeaders responseHeaders = getHttpHeaders(null);
        return ResponseEntity.noContent().headers(responseHeaders).build();
    }

    /**
     * Remove um registro de {@link Pedido}
     *
     * @param id Identificador da {@link Pedido}
     * @return
     */
    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        log.trace("Removendo pedido {}", id);
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @Override
    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        return ResponseEntity.ok()
                .allow(HttpMethod.POST, HttpMethod.GET, HttpMethod.DELETE, HttpMethod.PUT, HttpMethod.OPTIONS).build();
    }
}
