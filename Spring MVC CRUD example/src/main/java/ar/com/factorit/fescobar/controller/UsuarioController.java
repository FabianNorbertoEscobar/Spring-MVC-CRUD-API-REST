package ar.com.factorit.fescobar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import ar.com.factorit.fescobar.model.Usuario;

@Controller
public class UsuarioController {

	@RequestMapping(value = "/usuarios", method = RequestMethod.GET)
	public String findAll(Model model) {
		return "usuarios";
	}

	@RequestMapping(value = "/usuarios/save", method = RequestMethod.GET)
	public String save(Model model) {
		Usuario usuario = new Usuario();
		usuario.setId(-1);
		model.addAttribute("usuario", usuario);
		return "usuarioFormulario";
	}

	@RequestMapping(value = "/usuarios/update/{id}", method = RequestMethod.GET)
	public String update(@PathVariable("id") Integer id, Model model) {
		Usuario usuario = new Usuario();
		usuario.setId(id);
		model.addAttribute("usuario", usuario);
		return "usuarioFormulario";
	}

	@RequestMapping(value = "/usuarios/delete/{id}", method = RequestMethod.GET)
	public String delete(@PathVariable("id") Integer id) {
		return "redirect:/usuarios";
	}
}
