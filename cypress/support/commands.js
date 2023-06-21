Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Joao')
    cy.get('#lastName').type('Parazzi')
    cy.get('#email').type("joaopparazzi@gmail.com")
    cy.get('#open-text-area').type("teste")
    cy.contains('button', 'Enviar').click()
    
})