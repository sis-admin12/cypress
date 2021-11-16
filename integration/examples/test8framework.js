/// <reference types="Cypress" />
import HomePage from '../../support/HomePage'
import ProductPage from '../../support/ProductPage'

describe('My 8-rd Test Suite', function() 
{
 
    before(() =>  // runs once before all tests in the block
    {
        cy.fixture('example').then(function(dat) //importa datele din failul exemple.json
        {
            this.dat=dat //face data globala
        })        
      })

it('My 8-rd Test case',function() 
{
const homePage=new HomePage() 
const productPage=new ProductPage()

 cy.visit(Cypress.env('url')+"/angularpractice/")//acceseaza url declarat in cypress.json

 homePage.givename().type(this.dat.name)
 homePage.selectGender().select(this.dat.gender)
 homePage.email().type(this.dat.email)
 homePage.givename().should('have.value',this.dat.name)
 homePage.TwoWayDataBinding().should('have.value',this.dat.name)
 homePage.givename().should('have.attr','minlength','2') //verifica daca are parametrul minlegnth
 homePage.checkEntrepreneaur().should('be.disabled') // verifica daca butonul este inactiv
 homePage.checkStudent().should('be.enabled') // verifica daca butonul este activ
 homePage.selectGender().should('have.value','Male') //verifica daca e selectat genul

 homePage.ShopTab().click() //face click pe butonul shop
//cy.SelectProduct('Samsung') //adauga in cos produsul cu numele samsung
this.dat.productname.forEach(function(element) //functie de adaugare a mai multor prduse
{
    cy.SelectProduct(element) //adauga produsele cu numele indicate in exemple.json
})
//cy.pause()//pune pauza dupa apasam resum si merge pina la urma
productPage.getcorzina().click()//apasa butonul checkout(corzina)
productPage.verifycorzina().should('have.length',3)// verifica cite produse sunt in cos

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


cy.get('h3 strong').each(($el, index, $list) => 
{
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
    expect(suma).to.equal(Number(tot))//compara(poate compara doar numere)
})

cy.get(':nth-child(5) > :nth-child(5) > .btn').click()//apasa ceckout
cy.get('#country').type('Mo') //intrroduce moldova
cy.wait(6000)//asteapta 6 sec
cy.get('.suggestions > :nth-child(1) > li > a').click()//apasa clic pe sugestia Moldova
cy.get('.checkbox > label').click()//apasa butonul cu politica si ...
cy.get('.ng-untouched > .btn').click()//apasa butonul plaseaza comanda
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(verifytext)
{
    const actualtext=verifytext.text()
  expect(actualtext.includes("Success!")).to.be.true
})


})
 
}  )