package ar.com.factorit.fescobar.rest.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
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
	public ResponseEntity<?> save(@RequestBody @Valid UsuarioDTO usuarioDTO, Errors errors) {
		if (errors.hasErrors()) {
			return ResponseEntity.badRequest().body(getErrorMessages(errors));
		} else {
			usuarioFacade.save(usuarioDTO);
			return ResponseEntity.ok().body(usuarioDTO);
		}
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody @Valid UsuarioDTO usuarioDTO,
			Errors errors) {
		if (errors.hasErrors()) {
			return ResponseEntity.badRequest().body(getErrorMessages(errors));
		} else {
			usuarioFacade.update(usuarioDTO);
			return ResponseEntity.ok().body(usuarioDTO);
		}
	}

	@RequestMapping(value = "/usuarios/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		usuarioFacade.delete(id);
		return ResponseEntity.ok().body(null);
	}

	private String getErrorMessages(Errors errors) {
		StringBuilder errores = new StringBuilder();
		for (ObjectError error : errors.getAllErrors()) {
			errores.append(error.getDefaultMessage() + ". ");
		}
		return errores.toString();
	}

}
