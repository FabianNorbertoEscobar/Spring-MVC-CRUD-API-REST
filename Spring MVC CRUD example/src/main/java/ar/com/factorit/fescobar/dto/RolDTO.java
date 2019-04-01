package ar.com.factorit.fescobar.dto;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class RolDTO {

	private Integer id;
	
	@NotEmpty(message = "El nombre es requerido")
	@Pattern(regexp = "^([a-zA-Z]+\\s)*[a-zA-Z]+$", message = "El nombre solo puede tener letras y espacios no consecutivos")
	private String nombre;
	
	@NotEmpty(message = "La descripción es requerida")
	@Pattern(regexp = "^([a-zA-Z]+\\s)*[a-zA-Z]+$", message = "La descripción solo puede tener letras y espacios no consecutivos")
	private String descripcion;
	
	@NotNull(message = "La fecha de creación es requerida")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date fechaCreacion;
	
	@NotNull(message = "El estado es requerido")
	private boolean estado;

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

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

}
