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

/*Cria Pacientes Randômicos
 * 
 * Factory Method
 */
public List<Paciente> criarPacientesRandomicos(){
	List<Paciente> listaDePacientes = new ArrayList<>();
	listaDePacientes.add(new Paciente(1,"(13)-997713177","","358.315.558-01","bruno.andrade90@hotmail.com","Rua dr Adolfo Assis","Bruno","66","Andrade",""));
	listaDePacientes.add(new Paciente(2,"(13)-997713178","","358.315.558-02","bruno.andrade91@hotmail.com","Rua dr Adolfo Assis","Bruno2","66","Andrade",""));
	return listaDePacientes;
	
}

}
