package ar.com.factorit.fescobar.service;

import java.util.List;

import ar.com.factorit.fescobar.model.Rol;

public interface RolService {

	public List<Rol> findAll();

	public Rol findOne(int id);

	public boolean save(Rol rol);

	public boolean update(Rol rol);

	public void delete(int id);

}
