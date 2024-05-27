describe('template spec', () => {
  before(() => {
    cy.visit('/')

  })

  it('Verificar se o header esta visivel', () => {
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
  });

  it('Verificar se existe itens na playlist', () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it('Clicar no primeiro item da lista', () => {
    cy.get("[aria-label='playlist-item']").eq(7).click()
  });
  it('Verificar se existe itens na playlist', () => {
    cy.wait(2000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });
  it('Clicar no primeiro item da lista', () => {
    cy.get("[aria-label='music-item']").contains('Cavalinho').click()
  });
})