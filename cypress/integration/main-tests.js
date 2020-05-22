describe('Form test', () => {

    it('Can visit site', () => {

        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')

    })

    it('Can click build pizza', () => {

        cy.get('#buildlink').click()

    })

    it('Can type name', () => {

        cy.get('input[name="name"]').type('Joshua')
        cy.get('input[name="name"]').should('have.value', 'Joshua')

    })

    it('Can add multiple toppings', () => {

        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').should('have.prop', 'checked') //https://stackoverflow.com/questions/50808937/getting-the-checked-value-of-a-checkbox-material-design

    })

    it('Can submit form', () => {

        cy.get('form button').should('not.to.be.disabled')
        cy.get('form button').click()

    })

})