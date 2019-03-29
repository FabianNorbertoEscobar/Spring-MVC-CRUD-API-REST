package ar.com.factorit.fescobar.service;

import java.util.List;

import ar.com.factorit.fescobar.model.Usuario;

public interface UsuarioService {

	public List<Usuario> findAll();

	public Usuario findOne(int id);

	public boolean save(Usuario usuario);

	public boolean update(Usuario usuario);

	public void delete(int id);

}
