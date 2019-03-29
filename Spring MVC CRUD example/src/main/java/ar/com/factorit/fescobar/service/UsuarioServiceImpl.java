package ar.com.factorit.fescobar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ar.com.factorit.fescobar.dao.UsuarioDAO;
import ar.com.factorit.fescobar.model.Usuario;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioDAO usuarioDAO;

	@Override
	@Transactional
	public List<Usuario> findAll() {
		return usuarioDAO.findAll();
	}

	@Override
	@Transactional
	public Usuario findOne(int id) {
		return usuarioDAO.findOne(id);
	}

	@Override
	@Transactional
	public boolean save(Usuario usuario) {
		return usuarioDAO.save(usuario) != null;
	}

	@Override
	@Transactional
	public boolean update(Usuario usuario) {
		return usuarioDAO.save(usuario) != null;
	}

	@Override
	@Transactional
	public void delete(int id) {
		usuarioDAO.delete(id);
	}
}
