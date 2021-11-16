/// <reference types="Cypress" />
 
describe('My 4-rd Test Suite', function() 
{
 
it('My 4-rd Test case',function() {
 
 
cy.visit("http://qaclickacademy.com/practice.php/")

//swich to alert/window alerts
cy.get('#alertbtn').click()
//cy.get('[value="Confirm"]').click()
cy.get('#confirmbtn').click()


cy.on('window:alert',(str)=> 
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=> 
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


//open tabe
cy.get('#opentab').invoke('removeAttr','target').click() //open tab in the same window

cy.url().should('include','rahulshettyacademy')
cy.go('back')








})
 
}  )
