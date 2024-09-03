import 'cypress-xpath'

describe('Selecionar Produtos', () => {
    //atributos
    const massa = require('../fixtures/massa')

    beforeEach(() => {
        cy.visit('/')
    })

    it('Selecionar Sauce Labs Backpack', () => {

        cy.title()
            .should('eq', 'Swag Labs')

        cy.get('input[data-test="username"]')
            .type('standard_user')

        cy.get('#password')
            .type('secret_sauce')

        cy.get('input[name="login-button"]')
            .click()

        cy.get('span.title')
            .should('have.text', 'Products')

        cy.get('img[alt="Sauce Labs Backpack"]')
            .click()

        cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
            .should('have.text', 'Back to products')

        cy.get('div.inventory_details_name.large_size')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('div.inventory_details_price')
            .should('have.text', '$29.99')

        cy.get('#add-to-cart')
            .click()

        cy.get('a.shopping_cart_link')
            .should('have.text', '1')
            .click()

        cy.get('span.title')
            .should('have.text', 'Your Cart')

        cy.get('div.inventory_item_name')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('div.inventory_item_price')
            .should('have.text', '$29.99')

        cy.get('div.cart_quantity')
            .should('have.text', '1')

    })

    massa.array.forEach(({ username, productName, productPrice }) => {

        it(`Selecionar ${productName} - Usuário ${username}`, () => {

            cy.title()
                .should('eq', 'Swag Labs')

            cy.get('input[data-test="username"]')
                .type(username)

            cy.get('#password')
                .type('secret_sauce')

            cy.get('input[name="login-button"]')
                .click()

            cy.get('span.title')
                .should('have.text', 'Products')

            cy.get(`img[alt="${productName}"]`)
                .click()

            cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
                .should('have.text', 'Back to products')

            cy.get('div.inventory_details_name.large_size')
                .should('have.text', productName)

            cy.get('div.inventory_details_price')
                .should('have.text', productPrice)

            cy.get('#add-to-cart')
                .click()

            cy.get('a.shopping_cart_link')
                .should('have.text', '1')
                .click()

            cy.get('span.title')
                .should('have.text', 'Your Cart')

            cy.get('div.inventory_item_name')
                .should('have.text', productName)

            cy.get('div.inventory_item_price')
                .should('have.text', productPrice)

            cy.get('div.cart_quantity')
                .should('have.text', '1')

        })
    })

    /*
        afterEach(() => {
            cy.get('#remove-sauce-labs-backpack')
                .click() //remove item carrinho
    
            cy.get('#react-burger-menu-btn')
                .click() //icone 3 traços
    
            cy.get('#logout_sidebar_link', { timeout: 10000 })
                .should('be.visible') //esperar até que o elemento seja visível
    
                .click() //logout
    
            cy.get('#login-button')
                .should('be.visible')//tela de login
        })
    
    */
})