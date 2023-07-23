beforeEach(() => {
    cy.login(getData.Login.LoginEmail,getData.Login.LoginPassword)
    cy.visit('http://localhost:4200');
  })