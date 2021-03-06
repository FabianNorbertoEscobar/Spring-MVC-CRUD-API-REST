package ar.com.factorit.fescobar.dto;

import java.util.Set;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;

public class UsuarioDTO {

	private Integer id;

	@NotNull(message = "El nombre es requerido")
	@Pattern(regexp = "^([a-zA-Z]+\\s)*[a-zA-Z]+$", message = "El nombre solo puede tener letras y espacios no consecutivos")
	private String nombre;

	@NotNull(message = "El apellido es requerido")
	@Pattern(regexp = "^([a-zA-Z]+\\s)*[a-zA-Z]+$", message = "El apellido solo puede tener letras y espacios no consecutivos")
	private String apellido;

	@NotNull(message = "El email es requerido")
	@Email(message = "El email debe tener un formato válido")
	private String email;

	@NotNull(message = "El password es requerido")
	private String password;

	private Set<RolDTO> roles;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<RolDTO> getRoles() {
		return roles;
	}

	public void setRoles(Set<RolDTO> roles) {
		this.roles = roles;
	}

}
