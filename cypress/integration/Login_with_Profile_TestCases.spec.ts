/// <reference types="cypress" /> 
var getData = require('../DataAccess/getData.json');
const uuid = () => Cypress._.random(0, 1e6)
const num = uuid()
let caseName = getData.ProfileData.caseNumber+num;
describe("ai Marrvel Test Automation Scripts", () => {

  beforeEach(() => {
    cy.login(getData.Login.LoginEmail,getData.Login.LoginPassword)
    cy.visit('http://localhost:4200');
  })
      it("TestCase_01 : verifying that caseNumber exist and typebale and next button should Enabled after enter Case Number", () => {
        
  
        cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
        cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
       cy.wait(1000)

        cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(getData.ProfileData.caseNumber+num, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
        cy.wait(5000)
        cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
    })
    it("TestCase_02 : verifying Clinical Notes tab should be typeable and should upload a Phenotypes type file", () => {
    
        cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
        cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
       cy.wait(1000)
        cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(caseName, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
        cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
        cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
      cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
   //Will Upload File Here 

   //
    })
    it("TestCase_03 : verifying  Populate HPOs tab to add some Disease", () => {
     
        cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
        cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
       cy.wait(1000)
        cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(caseName, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
        cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
        cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
      cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
      cy.get('.mat-slide-toggle-bar').should('be.visible').click() // Search by Disease
      cy.get(':nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add first disease 
      cy.get('.mai-hpo-tree > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add second disease 
    cy.get('#cdk-step-content-0-2 > .mb-3 > .mat-focus-indicator').should('be.visible').click() // Click on Next button 
})
it("TestCase_04 : verifying Create Profile uploaded Successfully", () => {

  cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
  cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
 cy.wait(1000)
  cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(caseName, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
  cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
  cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
  cy.get('.mat-slide-toggle-bar').should('be.visible').click() // Search by Disease
 
  cy.get(':nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add first disease 
  cy.get('.mai-hpo-tree > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add second disease 
cy.get('#cdk-step-content-0-2 > .mb-3 > .mat-focus-indicator').should('be.visible').click() // Click on Next button 
cy.get('.mt-2 > .ml-2').click() // click on skip button in Add Analysis tab
    cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').should('be.visible') // verify that submit button should be exist in the DOM
    cy.get('.list-unstyled > :nth-child(1) > .d-block').should('have.text',caseName) // verify the CaseName which are enter is Name tab
    cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').click()// Click on Submit button to save the Case Name
    cy.wait(1000)
    cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Successfully created the profile.')
})
it("TestCase_05: verifying the latest created Profile", () => {

  cy.get('[routerlink="/browse"] > .mat-button-wrapper').click() // Show the records
  cy.get('.mai-list-item-header > .mai-list-item > .mai-list-item-name',{timeout:10000}).should('be.visible')
  cy.wait(2000)
  cy.get(':nth-child(2) > .mat-list-item-content').first().click()
  cy.get('.mai-list-nav-button-wrapper > .mat-button-disabled > .mat-button-wrapper').should('have.text','person '+caseName+' ').as('New  Profile Add Successfully')
})
it("TestCase_06: verifying the logout button for the App should be workable", () => {

cy.get('app-login-button > .mat-focus-indicator > .mat-button-wrapper').should('have.text','logout Logout\n').click()
cy.get('h1').should('have.text','Login').as('Profile is Logout Success')
})
})