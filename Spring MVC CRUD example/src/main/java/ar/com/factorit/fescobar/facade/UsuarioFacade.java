package ar.com.factorit.fescobar.facade;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ar.com.factorit.fescobar.dto.RolDTO;
import ar.com.factorit.fescobar.dto.UsuarioDTO;
import ar.com.factorit.fescobar.model.Rol;
import ar.com.factorit.fescobar.model.Usuario;
import ar.com.factorit.fescobar.service.RolServiceImpl;
import ar.com.factorit.fescobar.service.UsuarioServiceImpl;

@Component
public class UsuarioFacade {

	@Autowired
	private UsuarioServiceImpl usuarioService;

	@Autowired
	private RolServiceImpl rolService;

	@Autowired
	private ModelMapper modelMapper;

	private UsuarioDTO convertToUsuarioDTO(Usuario usuario) {
		UsuarioDTO usuarioDTO = modelMapper.map(usuario, UsuarioDTO.class);
		return usuarioDTO;
	}

	public List<UsuarioDTO> findAll() {
		List<Usuario> usuarios = usuarioService.findAll();
		List<UsuarioDTO> usuariosDTO = new ArrayList<UsuarioDTO>();
		for (Usuario usuario : usuarios) {
			usuariosDTO.add(convertToUsuarioDTO(usuario));
		}
		return usuariosDTO;
	}

	public UsuarioDTO findOne(Integer id) {
		return convertToUsuarioDTO(usuarioService.findOne(id));
	}

	public void save(UsuarioDTO usuarioDTO) {
		Usuario usuario = new Usuario();
		
		usuario.setNombre(usuarioDTO.getNombre());
		usuario.setApellido(usuarioDTO.getApellido());
		usuario.setEmail(usuarioDTO.getEmail());
		usuario.setPassword(usuarioDTO.getPassword());
		for (RolDTO rolDTO : usuarioDTO.getRoles()) {
			Rol rol = rolService.findOne(rolDTO.getId());
			usuario.getRoles().add(rol);
		}
		
		usuarioService.save(usuario);
	}

	public void update(UsuarioDTO usuarioDTO) {
		Usuario usuario = usuarioService.findOne(usuarioDTO.getId());
		
		usuario.setId(usuarioDTO.getId());
		usuario.setNombre(usuarioDTO.getNombre());
		usuario.setApellido(usuarioDTO.getApellido());
		usuario.setEmail(usuarioDTO.getEmail());
		usuario.setPassword(usuarioDTO.getPassword());
		usuario.getRoles().clear();
		for (RolDTO rolDTO : usuarioDTO.getRoles()) {
			Rol rol = rolService.findOne(rolDTO.getId());
			usuario.getRoles().add(rol);
		}
		
		usuarioService.update(usuario);
	}

	public void delete(Integer id) {
		usuarioService.delete(id);
	}

}
