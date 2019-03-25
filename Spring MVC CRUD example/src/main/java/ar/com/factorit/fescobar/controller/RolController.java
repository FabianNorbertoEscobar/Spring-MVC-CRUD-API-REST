package ar.com.factorit.fescobar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import ar.com.factorit.fescobar.model.Rol;

@Controller
public class RolController {
	
	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	public String findAll(Model model) {
		return "roles";
	}

	@RequestMapping(value = "/roles/save", method = RequestMethod.GET)
	public String save(Model model) {
		model.addAttribute("rol", new Rol());
		return "rolFormulario";
	}

	@RequestMapping(value = "/roles/update/{id}", method = RequestMethod.GET)
	public String update(@PathVariable("id") Integer id, Model model) {
		model.addAttribute("rol", new Rol());
		return "rolFormulario";
	}

	@RequestMapping(value = "/roles/delete/{id}", method = RequestMethod.GET)
	public String delete(@PathVariable("id") Integer id) {
		return "roles";
	}
}
