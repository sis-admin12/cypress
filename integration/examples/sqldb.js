/// <reference types="cypress" />

context('Windoq', () => {

    it('Database Interaction', () => {

cy.sqlServer("select * from Persons").then(function(result)
{
    console.log(result[0])
})

    })
})