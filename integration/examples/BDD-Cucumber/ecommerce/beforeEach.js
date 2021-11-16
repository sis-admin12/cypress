beforeEach(()=>
{
    cy.fixture('example').then(function(dat) //importa datele din failul exemple.json
    {
        this.dat=dat //face data globala
    })
});  
