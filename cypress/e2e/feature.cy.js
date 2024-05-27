describe('template spec', () => {
  before(() => {
    cy.visit('/')

  })

  it('Scenario 1', () => {
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='playlist-item']").eq(0).click()
    cy.wait(2000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item']").eq(0).click()
    cy.wait(5000)  
  });

  it('Scenario 2', () => {
    
    cy.visit('/')
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='playlist-item']").eq(1).click()
    cy.wait(2000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item']").eq(0).click()
    cy.wait(5000)  
  });

  it('Scenario 3', () => {
    cy.wait(2000)
    cy.get("[href='/Search']").click()
    cy.scrollTo("top")
    cy.get("[data-testid='campoBusca']").type("Samba de Malandro");
    // cy.get("[aria-label='music-item']").should("have-length.greaterThan", 0)
    cy.wait(1500)
    cy.get("[aria-label='music-item-search']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item-search']").first().click()
    cy.wait(1500)
    cy.get("[aria-label='music-item-search']").filter(":contains('Samba de Malandro')").first().then(async (item) => {
      cy.wait(1500)
      cy.wrap(item).find("[data-testid='icon-button']").click();
    });
  })
  
  it('Scenario 4', () => {
    cy.wait(3000)
    cy.get("[href='/Favorites']").click()
    cy.get("[aria-label='music-item-fav']").should("have.length.greaterThan", 0)
    cy.get("[aria-label='music-item-fav']").first().click()
      cy.wait(2000);
    cy.get("[aria-label='music-item-fav']").first().click()
      cy.wait(5000);
    
  });

})