class CadastroPage {
//Seletores
campoNome() {return cy.get('#name')}
campoEmail() {return cy.get('#email')}
campoTelefone() {return cy.get('#phone')}
campoSenha() {return cy.get('#password')}
campoConfirmarSenha() {return cy.get('#confirm-password')}
checkTerms() {return cy.get('#terms-agreement')}
botaoCriarConta() {return cy.get('#register-btn')}


//Metodos precisa usar e fechar parenteses() - metodo de preencher cadastro Modulo12 Aula 4 11:30

visitarPaginaCadastro() {
    cy.visit('register.html')
}

// erro de string vazia usando TRATATIVA IF exemplo Modulo 12 Aula 4 19:25
preencherCadastro(nome, email, telefone, senha, confirmaSenha) {
    if(nome) this.campoNome().clear().type(nome)
    if(email) this.campoEmail().clear().type(email)
    this.campoTelefone().clear().type(telefone)
    this.campoSenha().clear().type(senha)
    if(confirmaSenha) this.campoConfirmarSenha().clear().type(confirmaSenha)
    this.checkTerms().check()
    this.botaoCriarConta().click()
}



}

export default new CadastroPage()