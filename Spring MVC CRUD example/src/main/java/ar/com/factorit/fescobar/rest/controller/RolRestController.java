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

import ar.com.factorit.fescobar.dto.RolDTO;
import ar.com.factorit.fescobar.facade.RolFacade;

@RestController
@RequestMapping("/api")
public class RolRestController {

	@Autowired
	private RolFacade rolFacade;

	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public ResponseEntity<List<RolDTO>> findAll() {
		List<RolDTO> rolesDTO = rolFacade.findAll();
		return ResponseEntity.ok().body(rolesDTO);
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.GET)
	public ResponseEntity<RolDTO> findOne(@PathVariable("id") Integer id) {
		RolDTO rolDTO = rolFacade.findOne(id);
		return ResponseEntity.ok().body(rolDTO);
	}

	@RequestMapping(value = "/roles", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> save(@RequestBody @Valid RolDTO rolDTO, Errors errors) {
		if (errors.hasErrors()) {
			return ResponseEntity.badRequest().body(getErrorMessages(errors));
		} else {
			rolFacade.save(rolDTO);
			return ResponseEntity.ok().body(rolDTO);
		}
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody @Valid RolDTO rolDTO, Errors errors) {
		if (errors.hasErrors()) {
			return ResponseEntity.badRequest().body(getErrorMessages(errors));
		} else {
			rolFacade.update(rolDTO);
			return ResponseEntity.ok().body(rolDTO);
		}
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		rolFacade.delete(id);
		return ResponseEntity.ok().body("Rol eliminado");
	}

	private String getErrorMessages(Errors errors) {
		StringBuilder errores = new StringBuilder();
		for (ObjectError error : errors.getAllErrors()) {
			errores.append(error.getDefaultMessage() + ". ");
		}
		return errores.toString();
	}

}
