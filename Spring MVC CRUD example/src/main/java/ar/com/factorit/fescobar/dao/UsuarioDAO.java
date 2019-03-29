package ar.com.factorit.fescobar.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.com.factorit.fescobar.model.Usuario;

@Repository
public interface UsuarioDAO extends JpaRepository<Usuario, Integer>{

}
