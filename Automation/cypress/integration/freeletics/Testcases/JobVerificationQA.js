
// Importing the required classes 

import{Corporate} from "../PageObject/Corporate"
import{FreeleticsHome} from "../PageObject/FreeleticsHome"
import{JobDescription} from "../PageObject/JobDescription"
import{JobSearch} from "../PageObject/JobSearch"

/// <reference types="cypress" />

it('Verify that user has selected the QA Job from Careers Page and then verifies the QA Job Description and Your Profile', function()

    {
        // declaring objects for the classes used in the script
        const ObjCorporate = new Corporate()
        const ObjFreeleticsHome = new FreeleticsHome()
        const ObjJobDescriptionQA = new JobDescription()
        const ObjJobSearch = new JobSearch()


        // Flow of the script using functions
        ObjFreeleticsHome.HomePage()
        ObjCorporate.CorporateJobs()
        ObjJobSearch.JobSelectingQA()
        ObjJobDescriptionQA.JobDescriptionQA()
        ObjJobDescriptionQA.ApplyJob()



    }   
)