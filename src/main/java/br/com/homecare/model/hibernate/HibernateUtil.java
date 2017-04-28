package br.com.homecare.model.hibernate;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

public abstract class HibernateUtil<T, Type extends Serializable> implements IHibernateGenericoDAO<T, Serializable> {

	@SuppressWarnings("rawtypes")
	private Class classe;
	private static final SessionFactory sessionFactory = buildSessionFactory();
	private Session currentSession;
	private Transaction currentTransaction;

	@SuppressWarnings("unchecked")
	public HibernateUtil() {
		this.classe = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
	}

	private static SessionFactory buildSessionFactory() {
		
		Configuration configuration = new Configuration().configure();
		StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());
		
		return configuration.buildSessionFactory(builder.build());
		
	}
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public Session openCurrentSession() {
		currentSession = getSessionFactory().openSession();
		return currentSession;
	}
	public Session openCurrentSessionwithTransaction() {
		currentSession = getSessionFactory().openSession();
		currentTransaction = currentSession.beginTransaction();
		return currentSession;
	}
	public void closeCurrentSession() {
		currentSession.close();
	}
	public void closeCurrentSessionwithTransaction() {
		currentTransaction.commit();
		currentSession.close();
	}
	public Session getCurrentSession() {
		if (this.currentSession == null || !this.currentSession.isOpen()) {
			this.currentSession = sessionFactory.openSession();
		}
		return currentSession;
	}
	public void setCurrentSession(Session currentSession) {
		this.currentSession = currentSession;
	}
	public Transaction getCurrentTransaction() {
		return currentTransaction;
	}
	public void setCurrentTransaction(Transaction currentTransaction) {
		this.currentTransaction = currentTransaction;
	}
	public boolean inserir(T _entidade) {
		
		try {
			openCurrentSessionwithTransaction();
			getCurrentSession().save(_entidade);
			getCurrentSession().flush();
			closeCurrentSessionwithTransaction();
			
			return true;
			
		} catch (Exception e) {
			e.printStackTrace();
			reverter();
			return false;
		}
		
	}
	public boolean editar(T _entidade) {
		
		try {
			openCurrentSessionwithTransaction();
			getCurrentSession().update(_entidade);
			getCurrentSession().flush();
			closeCurrentSessionwithTransaction();
			
			return true;
			
		} catch (Exception e) {
			e.printStackTrace();
			reverter();
			return false;
			
		}
	}
	public boolean deletar(T _entidade) {
		
		try {
			openCurrentSessionwithTransaction();
			getCurrentSession().delete(_entidade);
			getCurrentSession().flush();
			closeCurrentSessionwithTransaction();
			
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			reverter();
			return false;
		}

	}
	@SuppressWarnings("unchecked")
	public boolean deletarTodos(T _entidade) {

		try {
			
			openCurrentSessionwithTransaction();
			Criteria cq = getCurrentSession().createCriteria(classe);
			List<T> listagenerica = cq.list();
			for (T t : listagenerica) {
				getCurrentSession().delete(t);
			}
			closeCurrentSessionwithTransaction();
			return true;
			
		} catch (Exception e) {
			e.printStackTrace();
			reverter();
			return true;
		}

		 
	}
	public List<T> listarTodos() {
		openCurrentSessionwithTransaction();
		@SuppressWarnings("unchecked")
		List<T> lista = getCurrentSession().createCriteria(this.classe).list();
		closeCurrentSessionwithTransaction();
		
		return lista;
	}
	public T listarPorId(Integer _id) {
		openCurrentSessionwithTransaction();
		@SuppressWarnings("unchecked")
		T entidadeEncontrada = (T) getCurrentSession().createCriteria(classe).add(Restrictions.idEq(_id)).uniqueResult();
		closeCurrentSession();
		
		return entidadeEncontrada;
			
}
	public void reverter() {
		getCurrentSession().getTransaction().rollback();
	}

}

