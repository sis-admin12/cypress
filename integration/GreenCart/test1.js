/// <reference types="Cypress" /> 
//adauga metodele Cypress 

describe('My First Test Suite', function() 
{
    it('My First Test Case!', function() 
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //viziteaza linkul care se indica
        cy.get('.search-keyword').type('ca') //scrie in serch ca
        cy.wait(3000) //asteapta 3 sec
        cy.get('.product').should('have.length',5) //verifica cite produse sau gasit chiar si cele invizibile
        cy.get('.product:visible').should('have.length',4) //doar produsele vizibile numara
        cy.get('.products').as('locator')
        cy.get('@locator').find('.product').should('have.length',4) //numara doar cele vizibile
        cy.get('@locator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('SEE') // nu este metoda a lui cypress deci se vede doar in consolca
        }) // adauga in cos produsul nr 3
        

        cy.get('@locator').find('.product').each(($el, index, $list) => //
        {
         const textVeg=$el.find('h4.product-name').text()               //
         if(textVeg.includes('Carrot'))                                 //functie de ferificare a textului
         {
             $el.find('button').click()                                //adauga in cos    
         }
        
    } )

cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text()) //
})
//cy.log(logo.text())






}) 
})


