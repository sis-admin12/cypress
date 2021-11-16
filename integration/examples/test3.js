/// <reference types="Cypress" />
 
describe('My 3-rd Test Suite', function() 
{
 
it('My 3-rd Test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


//Check Boxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')


//Static dropdowns
cy.get('select').select('option2').should('have.value','option2')


//Dinamic dropdowns
cy.get('#autocomplete').type('Mo')
cy.get('.ui-menu-item div').each(($el, index, $list) => 
{
    if($el.text()==="Moldova, Republic of")
    {
        $el.click()
    }
})
cy.get('#autocomplete').should('have.value', 'Moldova, Republic of')


//visible and non visible elements
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//radio buttons
cy.get('[for="radio1"] > .radioButton').check().should('be.checked').and('have.value', 'radio1')




}  )
 
 
 
}  )
