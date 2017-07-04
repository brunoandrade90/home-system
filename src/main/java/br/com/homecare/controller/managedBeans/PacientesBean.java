package br.com.homecare.controller.managedBeans;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import br.com.homecare.model.dao.PacienteDao;
import br.com.homecare.model.entidades.Paciente;
import br.com.homecare.model.entidades.Usuario;

@SessionScoped
@ManagedBean
public class PacientesBean {


	public PacientesBean() {
		paciente = new Paciente();
		pacienteEditado = new Paciente();
	}
	
	public String adicionar(){
	if(!new PacienteDao().checarExistenciaPaciente(paciente)){
		if(new PacienteDao().inserir(paciente)){
			FacesUtilsBean.lancarMensagemSucesso("Paciente inserido com sucesso.");
			paciente = new Paciente();
		}else{
			FacesUtilsBean.lancarMensagemErro("Erro ao Inserir Paciente"); 
		}
	}else{
		FacesUtilsBean.lancarMensagemSucesso("Já Existe Paciente Cadastrado com esse Cpf!"); 
	}
		return null;
	}

	public String editar() {

		if (new PacienteDao().editar(pacienteEditado)) {
			FacesUtilsBean.lancarMensagemSucesso("Usuario alterado com sucesso.");
			pacienteEditado = new Paciente();
		} else {
			FacesUtilsBean.lancarMensagemErro("Erro! Nao foi possivel alterar o usuario.");
		}

		return null;
	}
	

	public String excluir(Paciente _paciente) {

		if (new PacienteDao().deletar(_paciente)) {
			FacesUtilsBean.lancarMensagemSucesso("Usuario Deletado com sucesso.");
		} else {
			FacesUtilsBean.lancarMensagemErro("Erro! Nao foi possivel alterar o usuario.");
		}

		return null;
	}
	
	
	public List<Paciente> ListarTodosPacientes(){
	 listaDePacientes =	new PacienteDao().listarTodos();
	 return listaDePacientes;
	}
	
	
	//Chamar páginas
	
	public String chamaPaginaListaDePacientes(){
		return "pacientes.xhtml";
	}
	
	public String chamaPaginaNovoPaciente(){
		return "pacientes-novo.xhtml";
	}
	
	public String chamaPaginaEdicaoPaciente(){
		return "pacientes-edicao.xhtml";
	}
	
	

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Paciente getPacienteEditado() {
		return pacienteEditado;
	}

	public void setPacienteEditado(Paciente pacienteEditado) {
		this.pacienteEditado = pacienteEditado;
	}

	public List<Paciente> getListaDePacientes() {
		return listaDePacientes;
	}

	public void setListaDePacientes(List<Paciente> listaDePacientes) {
		this.listaDePacientes = listaDePacientes;
	}

	

	private Paciente paciente;
	private Paciente pacienteEditado;
	private List<Paciente> listaDePacientes;
	
	
	

}
