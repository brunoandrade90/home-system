package br.com.homecare.model.utils.email;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;

public class FabricaEmail {
	
	protected static final String EMAIL_NETFOODS = "freitas.felipee@live.com";
	protected static final String SENHA_NETFOODS = "plus4444";
	protected static final String NOME_NETFOODS = "NetFoods";
	
	private Properties getPropriedades() {
		
		Properties propriedes = new Properties();
		propriedes.put("mail.transport.protocol", "smtp");
		propriedes.put("mail.smtp.host", "smtp.live.com");
		propriedes.put("mail.smtp.socketFactory.port", "587");
		propriedes.put("mail.smtp.socketFactory.fallback", "false");
		propriedes.put("mail.smtp.starttls.enable", "true");
		propriedes.put("mail.smtp.auth", "true");
		propriedes.put("mail.smtp.port", "587");
		
		return propriedes;
	}
	private Session getSessao() {
		
		Session sessao = Session.getDefaultInstance(getPropriedades(),new javax.mail.Authenticator() {
							protected PasswordAuthentication getPasswordAuthentication() {
								return new PasswordAuthentication(EMAIL_NETFOODS, SENHA_NETFOODS);
							}
						});
		sessao.setDebug(true);
		
		return sessao;
		
	}
	protected Message getMensagem() {
		Message message = new MimeMessage(getSessao());
		return message;
	}
		
}