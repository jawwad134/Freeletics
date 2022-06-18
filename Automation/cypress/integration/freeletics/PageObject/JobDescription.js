export class JobDescription{

    JobDescriptionQA()
    
    {  
        
        // Responsibilities verification

        cy.get('.j9nMqlqzhWxl > ul > :nth-child(1)').should('contain.text','Coach our cross-functional agile teams in defining their testing strategies and processes')  
        cy.get('[itemprop="responsibilities"] > ul > :nth-child(n)').should('have.length',7)

        // Your Profile Verification
        cy.get('[itemprop="experienceRequirements"] > ul > :nth-child(n)').should('have.length',6)



    }
    
    ApplyJob()
    {
        // Click the apply button
        cy.get('.UZGg709deEYo > .AisLsJaE_AWn').click()

    }
}