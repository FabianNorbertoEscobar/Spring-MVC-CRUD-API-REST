package ar.com.factorit.fescobar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ar.com.factorit.fescobar.dao.RolDAO;
import ar.com.factorit.fescobar.model.Rol;

@Service
public class RolServiceImpl implements RolService {

	@Autowired
	private RolDAO rolDAO;

	@Override
	@Transactional
	public List<Rol> findAll() {
		return rolDAO.findAll();
	}

	@Override
	@Transactional
	public Rol findOne(int id) {
		return rolDAO.findOne(id);
	}

	@Override
	@Transactional
	public boolean save(Rol rol) {
		return rolDAO.save(rol) != null;
	}

	@Override
	@Transactional
	public boolean update(Rol rol) {
		return rolDAO.save(rol) != null;
	}

	@Override
	@Transactional
	public void delete(int id) {
		rolDAO.delete(id);
	}
}
