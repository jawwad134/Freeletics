export class JobSearch{

    JobSelectingQA()
    
    {  
        //Verifying the QA Job exists and latter Selects it
        cy.get('#engineering > .ZRWoX04UuZWA > ul > :nth-child(2) > a').click().should('contain.text','QA Engineer (all genders) - Remote or Munich')
        cy.get('#engineering > .ZRWoX04UuZWA > ul > :nth-child(2) > a').click()
    }
    
}