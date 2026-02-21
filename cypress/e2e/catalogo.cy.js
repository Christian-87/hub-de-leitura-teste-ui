/// <reference types="cypress"/>

describe('funcionalidade: Catalogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });
    // o skip e usado para pular o teste - ja que usamos como exemplo para encurtamento do btn-primary a seguir >>
    it.skip('Deve clicar no botao Adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)

    });
    // Encurtamento para btn-primary//
    it('Deve clicar em todos os botoes Adicionar a cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })

    });

    it('Deve clicar no primeiro botao Adicionar a cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botao Adicionar a cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    // E se eu quiser pegar do segundo item, ou terceiro ou quarto. Que nao seja nem o primeiro nem o ultimo o 0 siginica 1 na logica de progrmacao, nesse caso o 2 seria 3 // 

    it('Deve clicar no terceiro botao Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click()

    });


    it('Deve clicar no quinto botao Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });

    // Se eu quiser testar por nome //
    it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('Dom Casmurro').click()
        // o nome da url confere //
        cy.url().should('include', 'book-details')
        //adicionar na cesta //
        cy.get('#add-to-cart-btn').click()
        //Mensagem de adicionado com sucesso //
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')


    });



});
