/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';



describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')

    });

    // Usando variavel no let email ( video aula 5 11:00) // 

    it('Deve fazer cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Jose Joao')
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')

    });

    // Fakers ( video aula 6 )

    it('Deve fazer cadastro com sucesso usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    // Comando customizado e faker Modulo 12 aula 1 video 18 mins
    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName()
        cy.preecherCadastro(nome, email,'1198765432165','Teste@123','Teste@123')

    cy.url().should('include', 'dashboard')



});

});