/// <reference types="cypress" /> 
var getData = require('../DataAccess/getData.json');

describe("ai Marrvel Test Automation Scripts", () => {

  it("TestCase_01 : verifying Japanese Language system should throw error message app accept only valid email addres", () => {
    cy.visit('http://localhost:4200');
    cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
    cy.wait(2000) 
    cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
    cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
    cy.get('input[formcontrolname=email]').should('be.visible').type(getData.Language.Japanese, {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
    cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser1.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
    cy.get('input[formcontrolname=name]').should('be.visible').type(getData.RegistrationforUser1.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
   cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register').click() // click on Register button for Successfully Registration 
    cy.gettingEmailError()
        cy.wait(4000)
    })

    it("TestCase_02 : verifying Valid Email Address in English Language", () => {
        cy.visit('http://localhost:4200');
        cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
        cy.wait(2000) 
        cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
        cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
        cy.get('input[formcontrolname=email]').should('be.visible').type(getData.Language.English, {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
        cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser1.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
        cy.get('input[formcontrolname=name]').should('be.visible').type(getData.Language.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
        cy.gettingEmailError()
        })

        it("TestCase_03 : verifying Hindi Email Address", () => {
          cy.visit('http://localhost:4200');
          cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
          cy.wait(2000) 
          cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
          cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
          cy.get('input[formcontrolname=email]').should('be.visible').type(getData.Language.Hindi, {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
          cy.get('input[formcontrolname=password]').should('be.visible').type(getData.RegistrationforUser1.RegPassword, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
          cy.get('input[formcontrolname=name]').should('be.visible').type(getData.Language.FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
          cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register').click() // click on Register button for Successfully Registration 
          cy.gettingEmailError()
          })
          

})