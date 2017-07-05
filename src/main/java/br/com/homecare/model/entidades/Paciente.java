package br.com.homecare.model.entidades;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the pacientes database table.
 * 
 */
@Entity
@Table(name="pacientes")
@NamedQuery(name="Paciente.findAll", query="SELECT p FROM Paciente p")
public class Paciente implements Serializable,Cloneable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idPaciente;

	private String celular;

	private String complemento;

	private String cpf;

	private String email;

	private String endereco;

	private String nome;

	private String numero;


	private String sobrenome;

	private String telefone;

	public Paciente() {
	}
	
	

	public Paciente(int idPaciente, String celular, String complemento, String cpf, String email, String endereco,
			String nome, String numero, String sobrenome, String telefone) {
		super();
		this.idPaciente = idPaciente;
		this.celular = celular;
		this.complemento = complemento;
		this.cpf = cpf;
		this.email = email;
		this.endereco = endereco;
		this.nome = nome;
		this.numero = numero;
		this.sobrenome = sobrenome;
		this.telefone = telefone;
	}
	
	
	@Override
	public Paciente clone() throws CloneNotSupportedException {
	Paciente p = new Paciente();
	p.setCelular(this.celular);
	p.setCpf(this.cpf);
	p.setComplemento(this.complemento); 
	p.setEmail(this.email);
	p.setEndereco(this.endereco);
	p.setIdPaciente(this.idPaciente); 
	p.setNome(this.nome);
	p.setNumero(this.numero);
	p.setSobrenome(this.sobrenome);
	p.setTelefone(this.telefone); 
		return p;
	}
	




	public int getIdPaciente() {
		return this.idPaciente;
	}

	public void setIdPaciente(int idPaciente) {
		this.idPaciente = idPaciente;
	}

	public String getCelular() {
		return this.celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getComplemento() {
		return this.complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getCpf() {
		return this.cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEndereco() {
		return this.endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNumero() {
		return this.numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}


	public String getSobrenome() {
		return this.sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getTelefone() {
		return this.telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	
	@Override
	public String toString() {
	
		return this.nome + this.cpf + this.celular;
	}

}