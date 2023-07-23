/// <reference types="cypress" /> 
var getData = require('../DataAccess/getData.json');
const uuid = () => Cypress._.random(0, 1e6)
const num = uuid()
let caseName = getData.ProfileData.caseNumber+num;
describe("ai Marrvel Test Automation Scripts", () => {

  it.only("TestCase_01 : verifying e2e Flow For User"+getData.RegistrationforUser1.FullName, () => {
    cy.visit('http://localhost:4200');
    cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
    cy.wait(2000) 

    cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
    cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
    cy.get('input[formcontrolname=email]').should('be.visible').type(getData.RegistrationforUser1.RegEmail+num+'@yopmail.com', {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
    cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser1.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
    cy.get('input[formcontrolname=name]').should('be.visible').type(getData.RegistrationforUser1.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
    cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register').click() // click on Register button for Successfully Registration 
    cy.wait(2000) // wait for 2 seconds for the login process to complete
    cy.get('h1.d-inline-block',{timeout:60000}).should('have.text','Welcome, '+getData.RegistrationforUser1.FullName+'!') // Welcome Label

    // Create a profile CaseNumber 

    cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
    cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
   cy.wait(1000)
    cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(getData.ProfileData.caseNumber+num, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
    cy.wait(5000)
    cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
   
    // verifying Clinical Notes

    cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
    cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
    
    // veriying Populate HPOs

    cy.get('.mat-slide-toggle-bar').should('be.visible').click() // Search by Disease
    cy.get(':nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add first disease 
    cy.get('.mai-hpo-tree > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add second disease 
    cy.get('#cdk-step-content-0-2 > .mb-3 > .mat-focus-indicator').should('be.visible').click() // Click on Next button 

     // veriying Add analysis

     cy.get('.mt-2 > .ml-2').click() // click on skip button in Add Analysis tab

     // Verify Review and Submit tab

     cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').should('be.visible') // verify that submit button should be exist in the DOM
    cy.get('.list-unstyled > :nth-child(1) > .d-block').should('have.text',caseName) // verify the CaseName which are enter is Name tab
    cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').click()// Click on Submit button to save the Case Name
    cy.wait(1000)
    cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Successfully created the profile.') //
    cy.get('[routerlink="/browse"] > .mat-button-wrapper').click() // Show the records
  cy.get('.mai-list-item-header > .mai-list-item > .mai-list-item-name',{timeout:10000}).should('be.visible')
  cy.wait(2000)
  cy.get(':nth-child(2) > .mat-list-item-content').first().click()
  cy.get('.mai-list-nav-button-wrapper > .mat-button-disabled > .mat-button-wrapper').should('have.text','person '+caseName+' ').as('New  Profile Add Successfully')
  cy.get('app-login-button > .mat-focus-indicator > .mat-button-wrapper').should('have.text','logout Logout\n').click()
   cy.get('h1').should('have.text','Login').as('Profile is Logout Success')
   cy.ClearAllSaveSession()
    })

    it("TestCase_02 : verifying e2e Flow For User"+getData.RegistrationforUser2.FullName, () => {
      cy.visit('http://localhost:4200');
      cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
      cy.wait(2000) 
      cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
      cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
      cy.get('input[formcontrolname=email]').should('be.visible').type(getData.RegistrationforUser2.RegEmail+num+'@yopmail.com', {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
      cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser2.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
      cy.get('input[formcontrolname=name]').should('be.visible').type(getData.RegistrationforUser2.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
      cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register').click() // click on Register button for Successfully Registration 
      cy.wait(2000) // wait for 2 seconds for the login process to complete
      cy.get('h1.d-inline-block',{timeout:60000}).should('have.text','Welcome, '+getData.RegistrationforUser2.FullName+'!') // Welcome Label
  
      // Create a profile CaseNumber 
  
      cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
      cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
     cy.wait(1000)
      cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(getData.ProfileData.caseNumber+num, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
      cy.wait(5000)
      cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
     
      // verifying Clinical Notes
  
      cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
      cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
      
      // veriying Populate HPOs
  
      cy.get('.mat-slide-toggle-bar').should('be.visible').click() // Search by Disease
      cy.get(':nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add first disease 
      cy.get('.mai-hpo-tree > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add second disease 
      cy.get('#cdk-step-content-0-2 > .mb-3 > .mat-focus-indicator').should('be.visible').click() // Click on Next button 
  
       // veriying Add analysis
  
       cy.get('.mt-2 > .ml-2').click() // click on skip button in Add Analysis tab
  
       // Verify Review and Submit tab
  
       cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').should('be.visible') // verify that submit button should be exist in the DOM
      cy.get('.list-unstyled > :nth-child(1) > .d-block').should('have.text',caseName) // verify the CaseName which are enter is Name tab
      cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').click()// Click on Submit button to save the Case Name
      cy.wait(1000)
      cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Successfully created the profile.') //
      cy.get('[routerlink="/browse"] > .mat-button-wrapper').click() // Show the records
    cy.get('.mai-list-item-header > .mai-list-item > .mai-list-item-name',{timeout:10000}).should('be.visible')
    cy.wait(2000)
    cy.get(':nth-child(2) > .mat-list-item-content').first().click()
    cy.get('.mai-list-nav-button-wrapper > .mat-button-disabled > .mat-button-wrapper').should('have.text','person '+caseName+' ').as('New  Profile Add Successfully')
    cy.get('app-login-button > .mat-focus-indicator > .mat-button-wrapper').should('have.text','logout Logout\n').click()
     cy.get('h1').should('have.text','Login').as('Profile is Logout Success')
     cy.ClearAllSaveSession()
      })

      it("TestCase_03 : verifying e2e Flow For User"+getData.RegistrationforUser3.FullName, () => {
        cy.visit('http://localhost:4200');
        cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
        cy.wait(2000) 
        cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
        cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
        cy.get('input[formcontrolname=email]').should('be.visible').type(getData.RegistrationforUser3.RegEmail+num+'@yopmail.com', {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
        cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser3.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
        cy.get('input[formcontrolname=name]').should('be.visible').type(getData.RegistrationforUser3.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
        cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register').click() // click on Register button for Successfully Registration 
        cy.wait(2000) // wait for 2 seconds for the login process to complete
        cy.get('h1.d-inline-block',{timeout:60000}).should('have.text','Welcome, '+getData.RegistrationforUser3.FullName+'!') // Welcome Label
    
        // Create a profile CaseNumber 
    
        cy.get('.link-animate').should('have.text',' Create a profile ').click() // 1-  Click on  Create a Profile link
        cy.get('.mt-2 > .mat-focus-indicator').should('be.disabled') // Check Next button should be hide
       cy.wait(1000)
        cy.get('input[formcontrolname=nameInputFC]').should('be.visible').type(getData.ProfileData.caseNumber+num, {force: true}, {delay: 100})  // 2-  Enter a new identifier to create a new case
        cy.wait(5000)
        cy.get('.mt-2 > .mat-focus-indicator').should('be.visible').click() // Click on Next button when it Visible it should be visible when Case name is Enter
       
        // verifying Clinical Notes
    
        cy.get('textarea[formcontrolname=noteTextFC]').should('exist').type(getData.ProfileData.Clinical_Note) // Type Clinical Notes 
        cy.get('.justify-contents-end > .ml-2 > .mat-button-wrapper').should('exist').click() // Click on SKIP button
        
        // veriying Populate HPOs
    
        cy.get('.mat-slide-toggle-bar').should('be.visible').click() // Search by Disease
        cy.get(':nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add first disease 
        cy.get('.mai-hpo-tree > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click() // add second disease 
        cy.get('#cdk-step-content-0-2 > .mb-3 > .mat-focus-indicator').should('be.visible').click() // Click on Next button 
    
         // veriying Add analysis
    
         cy.get('.mt-2 > .ml-2').click() // click on skip button in Add Analysis tab
    
         // Verify Review and Submit tab
    
         cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').should('be.visible') // verify that submit button should be exist in the DOM
        cy.get('.list-unstyled > :nth-child(1) > .d-block').should('have.text',caseName) // verify the CaseName which are enter is Name tab
        cy.get('#cdk-step-content-0-4 > .mb-3 > .mat-focus-indicator > .mat-button-wrapper').click()// Click on Submit button to save the Case Name
        cy.wait(1000)
        cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text','Successfully created the profile.') //
        cy.get('[routerlink="/browse"] > .mat-button-wrapper').click() // Show the records
      cy.get('.mai-list-item-header > .mai-list-item > .mai-list-item-name',{timeout:10000}).should('be.visible')
      cy.wait(2000)
      cy.get(':nth-child(2) > .mat-list-item-content').first().click()
      cy.get('.mai-list-nav-button-wrapper > .mat-button-disabled > .mat-button-wrapper').should('have.text','person '+caseName+' ').as('New  Profile Add Successfully')
      cy.get('app-login-button > .mat-focus-indicator > .mat-button-wrapper').should('have.text','logout Logout\n').click()
       cy.get('h1').should('have.text','Login').as('Profile is Logout Success')
       cy.ClearAllSaveSession()
        })

})