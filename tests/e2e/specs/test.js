// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');

    cy.contains('.logo', 'Bootstrap 4 Form Builder');

    cy.get('.add-form').click();

    cy.get('#header').trigger('mousedown', { which: 1 });

    cy.get('.sortable').trigger('mousemove').trigger('mouseup');
  });

  it('Updates the header', () => {
    cy.get('.properties-circle').click();

    cy.wait(600);

    cy.get('input').eq(0).type(' Test');

    cy.contains('.editable', 'Header Test');

    cy.get('body').click();

    cy.wait(600);

    cy.get('.editable').first().clear().type('Header');

    cy.contains('.editable', 'Header');
  });

  it('Updates the Subheader', () => {
    cy.get('.properties-circle').click();

    cy.get('input').eq(1).type('This is a Subheader');

    cy.contains('.editable:eq(1)', 'This is a Subheader');

    cy.get('body').click();

    cy.wait(600);

    cy.get('div[contenteditable=true]').clear().type('Subheader');

    cy.contains('.editable:eq(1)', 'Subheader');
  });

  it('Updates the header size to check all sizes', () => {
    cy.get('.properties-circle').click();

    cy.wait(600);

    cy.get('.h1').should('be.visible');

    cy.get('.radio-inline').eq(1).click();

    cy.get('.h2').should('be.visible');

    cy.get('.radio-inline').eq(2).click();

    cy.get('.h3').should('be.visible');

    cy.get('.radio-inline').eq(3).click();

    cy.get('.h4').should('be.visible');

    cy.get('.radio-inline').eq(4).click();

    cy.get('.h5').should('be.visible');

    cy.get('.radio-inline').eq(5).click();

    cy.get('.h6').should('be.visible');

    cy.get('.radio-inline').eq(0).click();

    cy.get('.h1').should('be.visible');

    cy.get('body').click();

    cy.wait(600);
  });

  it('Updates the text alignment to check all alignments', () => {
    cy.get('.form-element-container').click();

    cy.get('.properties-circle').click();

    cy.wait(600);

    cy.get('.text-left').should('be.visible');

    cy.get('.radio-inline').eq(6).click();

    cy.get('.text-center').should('be.visible');

    cy.get('.radio-inline').eq(7).click();

    cy.get('.text-right').should('be.visible');

    cy.get('.radio-inline').eq(6).click();

    cy.get('.text-left').should('be.visible');

    cy.get('body').click();

    cy.wait(600);
  });

  it('Drag and drops a new email form element into the custom form', () => {
    cy.get('.add-form').click();

    cy.get('#email').trigger('mousedown', { which: 1 });

    cy.get('.sortable').trigger('mousemove', 150, 150).trigger('mouseup', 150, 150);
  });

  it('Updates the email property label', () => {
    cy.get('.properties-circle').eq(1).click();

    cy.wait(600);

    cy.get('input').eq(1).type(' Test');

    cy.contains('.editable', 'Email Test');

    cy.get('body').click();

    cy.wait(600);

    cy.get('.form-element-container:eq(1) .editable').clear().type('Email');

    cy.contains('.editable', 'Email');
  });
});
