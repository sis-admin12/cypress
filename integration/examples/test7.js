/// <reference types="Cypress" />

describe('My 7-rd Test Suite', function() 
{
 
it('My 7-rd Test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)
})








})
 
}  )