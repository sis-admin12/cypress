class HomePage
{

givename()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

TwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

selectGender()
{
    return cy.get('select')
}

checkEntrepreneaur()
{
    return cy.get('#inlineRadio3')
}

ShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}
email()
{
    return cy.get(':nth-child(2) > .form-control')
}
checkStudent()
{
    return cy.get('#inlineRadio1')
}


}

export default HomePage;