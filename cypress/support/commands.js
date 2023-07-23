// ***********************************************
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('http://localhost:4200');
        cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
        cy.wait(2000) 
        cy.get('h1').should('have.text','Login') // verify that we are in the Correct tab for Login
        cy.get('input[formcontrolname=email]').should('be.visible').type(username, {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
        cy.get('input[formcontrolname=password]').should('be.visible').type(password, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
        cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Login').click() // click on Login button for Successfully Login 
        cy.wait(2000) // wait for 2 seconds for the login process to complete
    })
  })

  Cypress.Commands.add('Registration', (username, password,FullName) => {
    cy.session([username, password], () => {
        cy.visit('http://localhost:4200');
        cy.get('app-login-button > .mat-focus-indicator').should('have.text','login Login\n').click()  //1.  Click on Login button from Home screen to Navigte into Login Form 
        cy.wait(2000) 
        cy.get('.ml-2').should('have.text','Create an account').click() // Click on Create Account
        cy.get('h1').should('have.text','Register') // verify that we are in the Correct tab for Login
        cy.get('input[formcontrolname=email]').should('be.visible').type(username, {force: true}, {delay: 100}) // 2. Email Should be  Visible for Typing
        cy.get('input[formcontrolname=password]').should('be.visible').type(password, {force: true}, {delay: 100}) // 3. Password  Should be  Visible for Typing
        cy.get('input[formcontrolname=name]').should('be.visible').type(FullName, {force: true}, {delay: 100}) // 3. Full Name  Should be  Visible for Typing
        cy.get('.mat-focus-indicator.mat-primary > .mat-button-wrapper').should('have.text','Register') // click on Register button for Successfully Registration 
        cy.wait(2000) // wait for 2 seconds for the login process to complete
    })
  })

  
  Cypress.Commands.add('gettingEmailError', () => {
    cy.get('body').then($body => {
      if ($body.find('#mat-error-0').length > 0) {    //this element function will call backend html and Css file
        debugger;
        throw new Error("Email is invalid check the email or Language of the mail address")
        cy.wait(1000)
        }
      })
  })

  Cypress.Commands.add('ClearAllSaveSession', () => {
    Cypress.session.clearAllSavedSessions()
    cy.get('.saved-session').should('not.exist')
   cy.clearCookies()
    cy.getCookies().should('be.empty')
  })
