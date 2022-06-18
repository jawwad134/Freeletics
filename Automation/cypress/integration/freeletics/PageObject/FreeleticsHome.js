export class FreeleticsHome{

    HomePage()
    
    {  
        cy.visit('https://www.freeletics.com/en/')
        // Accepting All Cookies
        cy.get('.AbTvZmGqRK1l > .AisLsJaE_AWn > span').click()
        // verifying the Career Link and clicking the link
        cy.get('.qEilawsX5omV li:nth-child(2) ul.ljBmczspopnO li:nth-child(1) a:nth-child(1) > span:nth-child(1)').scrollIntoView().should('be.visible')
        cy.get('.qEilawsX5omV li:nth-child(2) ul.ljBmczspopnO li:nth-child(1) a:nth-child(1) > span:nth-child(1)').click()

 
    }
    
}