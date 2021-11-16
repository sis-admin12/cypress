/// <reference types="Cypress" />

describe('My 6-rd Test Suite', function() 
{
 
it('My 6-rd Test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//cy.get('.mouse-hover-content').invoke('show') //arata elementele ce le contine
cy.contains('Top').click({ force: true }) //face click pe elementul invizibil
cy.url().should('include','top')








})
 
}  )