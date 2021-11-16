/// <reference types="Cypress" />
 
describe('My 5-rd Test Suite', function() 
{
 
it('My 5-rd Test case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('tr td:nth-child(2)').each(($el, index, $list) => //cauta in tot tabelul
{
    const text= $el.text()
    if(text.includes("Python"))
    {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
            const priceText= price.text()
            expect(priceText).to.equal('25')
        })
    }
})








})
 
}  )