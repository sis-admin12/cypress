/// <reference types="Cypress" />
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/HomePage'
import ProductPage from '../../../../support/ProductPage'


Given('I open Ecommerce Page', () =>
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.wait(3000)
})


When('I add items to cart', function()
{
const homePage=new HomePage() 
const productPage=new ProductPage()
    homePage.ShopTab().click() //face click pe butonul shop
    //cy.SelectProduct('Samsung') //adauga in cos produsul cu numele samsung
    this.dat.productname.forEach(function(element) //functie de adaugare a mai multor prduse
    {
        cy.SelectProduct(element) //adauga produsele cu numele indicate in exemple.json
    });
    productPage.getcorzina().click()
})


And('Validate the total prices', function()
{
    cy.get('h3 strong').each(($el, index, $list) => 
{
    var suma=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => //alege din tabel doar preturile
{
    const value= $el.text()
    var result= value.split(" ")
    result= result[1].trim() //afiseaza doar numarul fara semnul la valuta
    cy.log(result) // afiseaza in loguri preturile produsurilor chiar daca sun x2 sau mai mult
    suma=Number(suma)+Number(result) //calculeaza suma
    
}).then(function() //va calcula suma dupa ce se inceplineste bucla de mai sus
{
    cy.log(suma) //afiseaza suma dupa ce sa indeplinit bucla de mai sus (doar dupa ea)
})

    const total=$el.text()
    var tot= total.split(" ")
    tot= tot[1].trim()
    cy.log(tot)
    if(suma==tot)
    {
        cy.log("Good")
    }
    else
    {
        cy.log("Fuck")
    }
    //expect(suma).to.equal(Number(tot))//compara(poate compara doar numere)
})
})

Then('Select the country submit and verify thankyou', function() 
{
cy.get(':nth-child(5) > :nth-child(5) > .btn').click()//apasa ceckout
cy.get('#country').type('Mo') //intrroduce moldova
cy.wait(6000)//asteapta 6 sec
cy.get('.suggestions > :nth-child(1) > li > a').click()//apasa clic pe sugestia Moldova
cy.get('.checkbox > label').click()//apasa butonul cu politica si ...

//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.on('window:alert',(str)=> 
{
    //Mocha
    expect(str).to.equal('Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and Business Standard Private Limited.')
})
cy.get('.nsm-dialog-animation-fade')
cy.on('window:alert',(str)=> 
{
    //Mocha
    expect(str).to.contain('Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and Business Standard Private Limited.')
})//apasa butonul close

cy.get('.ng-untouched > .btn').click()//apasa butonul plaseaza comanda

cy.get('.alert').then(function(verifytext)
{
    const actualtext=verifytext.text()
  expect(actualtext.includes("Success!")).to.be.true
})
})
