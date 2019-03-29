package ar.com.factorit.fescobar.facade;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ar.com.factorit.fescobar.dto.RolDTO;
import ar.com.factorit.fescobar.model.Rol;
import ar.com.factorit.fescobar.service.RolServiceImpl;

@Component
public class RolFacade {

	@Autowired
	private RolServiceImpl rolService;

	@Autowired
	private ModelMapper modelMapper;

	private RolDTO convertToRolDTO(Rol rol) {
		RolDTO rolDTO = modelMapper.map(rol, RolDTO.class);
		return rolDTO;
	}

	public List<RolDTO> findAll() {
		List<Rol> roles = rolService.findAll();
		List<RolDTO> rolesDTO = new ArrayList<RolDTO>();
		for (Rol rol : roles) {
			rolesDTO.add(convertToRolDTO(rol));
		}
		return rolesDTO;
	}

	public RolDTO findOne(Integer id) {
		return convertToRolDTO(rolService.findOne(id));
	}

	public void save(RolDTO rolDTO) {
		Rol rol = new Rol();

		rol.setNombre(rolDTO.getNombre());
		rol.setDescripcion(rolDTO.getDescripcion());
		rol.setFechaCreacion(rolDTO.getFechaCreacion());
		rol.setEstado(rolDTO.isEstado());

		rolService.save(rol);
	}

	public void update(RolDTO rolDTO) {
		Rol rol = rolService.findOne(rolDTO.getId());

		rol.setId(rolDTO.getId());
		rol.setNombre(rolDTO.getNombre());
		rol.setDescripcion(rolDTO.getDescripcion());
		rol.setFechaCreacion(rolDTO.getFechaCreacion());
		rol.setEstado(rolDTO.isEstado());

		rolService.update(rol);
	}

	public void delete(Integer id) {
		rolService.delete(id);
	}
}
