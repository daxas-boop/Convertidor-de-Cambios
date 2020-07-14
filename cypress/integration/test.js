/// <reference types="Cypress"/>

const URL = 'http://127.0.0.1:8080/';

it('Prueba', () => {
  cy.visit(URL);
  cy.get('#monedas');
});
