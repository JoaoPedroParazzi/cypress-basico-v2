/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
it.only('testa a página da política de privacidade de forma independente', function () {
    cy.visit('./src/privacy.html')
        cy.contains('#title', 'CAC TAT - Política de privacidade')
    })

})