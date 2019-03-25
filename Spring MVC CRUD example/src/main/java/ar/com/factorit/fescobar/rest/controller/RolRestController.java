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

import ar.com.factorit.fescobar.model.Rol;
import ar.com.factorit.fescobar.service.RolService;

@RestController
@RequestMapping("/api")
public class RolRestController {

	@Autowired
	RolService rolService;

	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public ResponseEntity<List<Rol>> findAll() {
		List<Rol> roles = rolService.findAll();
		return ResponseEntity.ok().body(roles);
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.GET)
	public ResponseEntity<Rol> findOne(@PathVariable("id") Integer id) {
		Rol rol = rolService.findOne(id);
		return ResponseEntity.ok().body(rol);
	}

	@RequestMapping(value = "/roles", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> save(@RequestBody Rol rol) {
		rolService.save(rol);
		return ResponseEntity.ok().body("Rol agregado");
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Rol rol) {
		rolService.update(rol);
		return ResponseEntity.ok().body("Rol actualizado");
	}

	@RequestMapping(value = "/roles/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		rolService.delete(id);
		return ResponseEntity.ok().body("Rol eliminado");
	}
}
