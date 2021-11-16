/// <reference types="Cypress" />
 
describe('My Fake Test Suite', function() 
{
 
it('My FAKERESPONSE Test case',function() {

cy.visit('https://example.cypress.io/commands/network-requests')
cy.server()

cy.route(
    {
        method: 'PUT',
        url: 'comments/*',
        status: 404,
        response :{
            error : "Hey Pizdiuc"
        },
        delay : 1000
    }).as('UpdateComment')

    cy.get('.network-put').click()

    cy.get('.network-put-comment').should('contain',"Hey")










})
})