describe('Login', () => {
  it('debería iniciar sesión con el usuario estándar', () => {
    // Limpia cookies y Local Storage antes de iniciar la prueba
    cy.clearCookies();
    cy.clearLocalStorage();

    // Visita la página y realiza el inicio de sesión
    cy.visit('http://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Agrega productos al carrito y verifica que estén en el carrito
    cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();

    // Visualizar el carrito de compras
    cy.get('#shopping_cart_container a').click();
    cy.get('#cart_contents_container .cart_item').should('have.length', 2);

    // Completar Formulario de compras
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('Anuard');
    cy.get('#last-name').type('Michelen');
    cy.get('#postal-code').type('809');
    cy.get('.checkout_buttons .btn_primary').click();

    // Finalizar Compra
    cy.get('.cart_button').click();

    // Validar orden
    cy.get('h2.complete-header').should('have.text', 'Thank you for your order!');    

  });
});
