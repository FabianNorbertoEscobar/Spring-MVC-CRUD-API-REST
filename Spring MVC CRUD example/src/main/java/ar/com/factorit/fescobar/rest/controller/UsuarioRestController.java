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

import ar.com.factorit.fescobar.dto.UsuarioDTO;
import ar.com.factorit.fescobar.facade.UsuarioFacade;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {

	@Autowired
	private UsuarioFacade usuarioFacade;

	@RequestMapping(value = "/usuarios", method = RequestMethod.GET)
	public ResponseEntity<List<UsuarioDTO>> findAll() {
		List<UsuarioDTO> usuariosDTO = usuarioFacade.findAll();
		return ResponseEntity.ok().body(usuariosDTO);
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.GET)
	public ResponseEntity<UsuarioDTO> findOne(@PathVariable("id") Integer id) {
		UsuarioDTO usuarioDTO = usuarioFacade.findOne(id);
		return ResponseEntity.ok().body(usuarioDTO);
	}

	@RequestMapping(value = "/usuarios", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> save(@RequestBody UsuarioDTO usuarioDTO) {
		usuarioFacade.save(usuarioDTO);
		return ResponseEntity.ok().body("Usuario agregado");
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody UsuarioDTO usuarioDTO) {
		usuarioFacade.update(usuarioDTO);
		return ResponseEntity.ok().body("Usuario actualizado");
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		usuarioFacade.delete(id);
		return ResponseEntity.ok().body("Usuario eliminado");
	}

}
