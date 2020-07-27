// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('.logo', 'Bootstrap 4 Form Builder');

    cy.get('.add-form').click();

    cy.get('#header').trigger('mousedown', { which: 1 });

    cy.get('.sortable').trigger('mousemove').trigger('mouseup');

    cy.get('.properties-circle').click();

    cy.get('.input-label').type(' Test');

    cy.contains('.editable', 'Header Test');

    cy.get('body').click();
  });
});
