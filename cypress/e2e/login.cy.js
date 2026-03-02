/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

// o comando acima foi usado para acessar outra pasta usuario.json modulo 12 aula 2 - 4:24

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')

    });

    //Modulo 12 - Aula 1 : Massa de dados em arquivo - Usando importacao de massa de dados.
    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard.html')

    });

    // Validando acoes dentro do dashboard, que requere senha e usuario para se testar
    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')

    });

    it('Deve fazer login com sucesso com conta Admin - Usando comando cust. importacao de massa', () => {
        cy.login(user.email, user.senha)

    });

});