/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')

    })

    it('verifica o título da aplicação', function () {

        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Parazzi')
        cy.get('#email').type("joaopparazzi@gmail.com")
        cy.get('#open-text-area').type("teste123445232213")
        cy.contains('button', 'Enviar').click()
        cy.get('.success > strong').should("be.visible")


    })
    it('preenche os campos obrigatórios e envia o formulário teste delay 0 ', function () {
        const longtext = "WTWTWTRWWTRW1sd11ca12da2121as211s2aa21s12sa21sa21s1a2s12sa21a"
        cy.get('#firstName').type(longtext, { delay: 0 })



    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Parazzi')
        cy.get('#email').type("joaopparazzi@gmail,com")
        cy.get('#open-text-area').type("teste123445232213")
        cy.contains('button', 'Enviar').click()
        cy.get('.error > strong').should("be.visible")



    })
    it('xibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Parazzi')
        cy.get('#email').type("joaopparazzi@gmail,com", { delay: 0 })
        cy.get('#open-text-area').type("teste123445232213", { delay: 0 })
        cy.contains('button', 'Enviar').click()
        cy.get('#phone-checkbox').click()
        cy.get('.error > strong').should("be.visible")



    })
    it('o qual limpa um campo, para posterior digitação, por exemplo', function () {
        cy.get('#firstName').type('Joao').clear().should('have.value', '')



    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.contains('button', 'Enviar').click()
        cy.get('.error > strong').should("be.visible")


    })
    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success > strong').should("be.visible")

    })
    it('Outra forma de identificar elementos ', function () {
        cy.contains('.success > strong', 'Mensagem enviada com sucesso.')


    })
    it('Outra forma de identificar elementos ', function () {
        cy.get('select').select('youtube').should('have.value', 'youtube')


    })
    it('Outra forma de identificar elementos ', function () {
        cy.get('select').select('Blog').should('have.value', 'blog')


    })
    it('Outra forma de identificar elementos ', function () {
        cy.get('select').select('Blog').should('have.value', 'blog')


    })
    it('Enviar arquivos e ver se o nome persiste', function () {
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
            .should(function ($input) {
                console.log($input)
                expect($input[0].files[0].name).to.equal("example.json")

            })
    })
    it('Enviar arquivos e simular drag and drop', function () {
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function ($input) {
                console.log($input)
                expect($input[0].files[0].name).to.equal("example.json")

            })
    })
    it('Enviar arquivos e simular drag and drop', function () {

        cy.fixture('example.json').as('samplefile')
        cy.get('#file-upload').selectFile('@samplefile')
            .should(function ($input) {
                console.log($input)
                expect($input[0].files[0].name).to.equal("example.json")

            })
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
        cy.get('a').should("be.visible").invoke("removeAttr", 'target').click()
        cy.contains('#title', 'CAC TAT - Política de privacidade')

    })
    

})

