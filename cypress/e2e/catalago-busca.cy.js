/// <reference types="cypress"/>
import catalago from "../fixtures/livros.json"

// Aula 2 Massa de dados 6:00 - pode se separar arquivos por contexto dependendo do volume de testes ( pode exemplo muitos testes de busca//
describe('Funcionalidade: Busca no Catalogo', () => {
    beforeEach(() => {
        cy.visit('catalog.html')

    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark').should('contain', '1984')

        // Essse teste vai procurar por um livro nao definido

    });

    // Aula 2 Massa de dados 10:00 Esse teste vai procurar por um livro nao definido e criar um arquivo em fixtures e import no catalago-busca
it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
    cy.get('#search-input').type(catalago[1].livro)
    cy.get('.card-title > .text-dark').should('contain', catalago[1].livro)
});


});