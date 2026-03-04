/// <reference types="cypress"/>
import catalogo from "../fixtures/livros.json"

// Aula 2 Mod 12 - Massa de dados 6:00 - pode se separar arquivos por contexto dependendo do volume de testes ( pode exemplo muitos testes de busca//
describe('Funcionalidade: Busca no Catalogo', () => {
    beforeEach(() => {
        cy.visit('catalog.html')

    });
// Voltar com it.only apos teste Cypress Cloud - falha proposital
    it.only('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark').should('contain', '1984')

    });

    // Aula 2 Massa de dados 10:00 Esse teste vai procurar por um livro nao definido e criar um arquivo em fixtures e import no catalago-busca
    it.only('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[2].livro)
        cy.get('.card-title > .text-dark').should('contain', catalogo[1].livro)
    });
});



//Aula 3 Mod12 6:41 - PRECISA DE REVISAO - Vamos usar um recurso nativo do Cypress Fixtures que vai puxar de livrosjson ( cat e apenas para diferenciar do catalago do teste acima na aula)


it('Deve fazer a busca de um livro usando Fixture', () => {
    cy.fixture('livros').then((cat) =>{
        cy.get('#search-input').type(cat[1].livro)
        cy.get('.card-title').should('contain', cat[1].livro)
    })


});


it('Deve validar todos os livros da lista', () => {
    cy.fixture('livros').then((cat) => {
        cat.forEach(item => {
            cy.get('#search-input').clear().type(item.livro)
            cy.get('.card-title').should('contain', item.livro)
        })
    })
});
