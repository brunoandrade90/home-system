package br.com.homecare.controller.managedBeans;

import java.io.Serializable;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

@ManagedBean
public class FacesUtilsBean implements Serializable {
	
	private static final long serialVersionUID = -8113276002158466426L;

	public static void lancarMensagemSucesso(String mensagem) {
		FacesMessage facesMessage = new FacesMessage(FacesMessage.SEVERITY_INFO, mensagem, mensagem);
		FacesContext facesContext = FacesContext.getCurrentInstance();
		facesContext.addMessage(null, facesMessage);
	}
	
	public static void lancarMensagemErro(String mensagem) {
        FacesMessage facesMessage = new FacesMessage(FacesMessage.SEVERITY_INFO, mensagem, mensagem);
        FacesContext facesContext = FacesContext.getCurrentInstance();
        facesContext.addMessage(null, facesMessage);
    }
	
}
