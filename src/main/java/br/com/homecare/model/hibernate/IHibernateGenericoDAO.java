package br.com.homecare.model.hibernate;

import java.io.Serializable;
import java.util.List;

public interface IHibernateGenericoDAO<T, Type extends Serializable>{
	
	boolean inserir(T _entidade);
	boolean editar(T _entidade);
	boolean deletar (T _entidade);
	void reverter();
	public T listarPorId(Integer _id);
	List<T> listarTodos();

}