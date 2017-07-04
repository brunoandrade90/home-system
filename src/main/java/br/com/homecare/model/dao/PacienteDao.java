package br.com.homecare.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import br.com.homecare.model.entidades.Paciente;
import br.com.homecare.model.hibernate.HibernateUtil;

public class PacienteDao extends HibernateUtil<Paciente, Integer>{
	
	
public boolean checarExistenciaPaciente(Paciente _paciente) {
		
		boolean existe;
		
		Session session = getCurrentSession();
		Criteria cq = session.createCriteria(Paciente.class);
		cq.add(Restrictions.eq("cpf", _paciente.getCpf()));
		cq.setMaxResults(1);
		
		if(cq.list().isEmpty()) {
			existe = false;
		} else {
			existe = true;
		}
		
		session.close();
		
		return existe;
	}
 
}
