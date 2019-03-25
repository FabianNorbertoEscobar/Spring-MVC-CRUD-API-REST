package ar.com.factorit.fescobar.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ar.com.factorit.fescobar.model.Usuario;
import ar.com.factorit.fescobar.service.RolService;
import ar.com.factorit.fescobar.service.UsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {

	@Autowired
	UsuarioService usuarioService;

	@Autowired
	RolService rolService;

	@RequestMapping(value = "/usuarios", method = RequestMethod.GET)
	public ResponseEntity<List<Usuario>> findAll() {
		List<Usuario> usuarios = usuarioService.findAll();
		return ResponseEntity.ok().body(usuarios);
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.GET)
	public ResponseEntity<Usuario> findOne(@PathVariable("id") Integer id) {
		Usuario usuario = usuarioService.findOne(id);
		return ResponseEntity.ok().body(usuario);
	}

	@RequestMapping(value = "/usuarios", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> save(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
		return ResponseEntity.ok().body("Usuario agregado");
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Usuario usuario) {
		usuarioService.update(usuario);
		return ResponseEntity.ok().body("Usuario actualizado");
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		usuarioService.delete(id);
		return ResponseEntity.ok().body("Usuario eliminado");
	}
}
