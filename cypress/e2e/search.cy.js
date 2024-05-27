describe('Teste da tela de pesquisa', () => {
  before(() => {

    cy.visit('/');

  })
  it('Redirecionar a minha tela para a tela de busca', () => {

    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  })

  it('Procurar por uma musica', () => {
    cy.get("[data-testid='campoBusca']").type("Samba de Malandro");


    // cy.get("[aria-label='music-item']").should("have-length.greaterThan", 0)
  });

  
  it("Clicou no botão curtir", async () => {

    cy.wait(1500)

    cy.get("[aria-label='music-item']").filter(":contains('Samba de Malandro')").first().then(async (item) => {
      cy.wait(1500)
      cy.wrap(item).find("[data-testid='icon-button']").click();
    });


  })
})
