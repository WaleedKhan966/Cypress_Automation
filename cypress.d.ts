declare namespace Cypress {
  interface Chainable {
    setCookie(name: string, value: string, options?: Cypress.CookieOptions): Chainable<Window>;
    getCookie(name: string): Chainable<Cypress.Cookie>;
    clearCookie(name: string, options?: Cypress.CookieOptions): Chainable<Window>;
    clearCookies(options?: Cypress.CookieOptions): Chainable<Window>;
  }
}
