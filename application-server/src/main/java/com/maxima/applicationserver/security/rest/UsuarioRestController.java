package com.maxima.applicationserver.security.rest;


import com.maxima.applicationserver.security.model.Usuario;
import com.maxima.applicationserver.security.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestController {

    private final UsuarioService usuarioService;

    public UsuarioRestController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getAll() {
        return ResponseEntity.ok(usuarioService.getAll());
    }

    @GetMapping(value = "/logado")
    public ResponseEntity<Usuario> getUsuarioAtual() {
        return ResponseEntity.ok(usuarioService.getUserWithAuthorities().get());
    }
}
