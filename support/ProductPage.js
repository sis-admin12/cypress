class ProductPage
{

getcorzina()
{
  return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
verifycorzina()
{
    return cy.get('div.media-body')
}


}

export default ProductPage;