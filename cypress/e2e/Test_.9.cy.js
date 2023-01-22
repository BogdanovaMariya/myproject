describe('sonnik', () => {
  it.only('test ',() => {
      cy.visit('https://horo.mail.ru/sonnik/')
    cy.get('.dropdown__text').click('')
    cy.get('[data-optidx="5"]').click('')
    cy.get('.input__field').type('Мужчина').click('')
    cy.contains('Толковать сон').click()

    cy.get('.newsitem__text')
    .should('have.length', 2)
    .should('include.text', 'мужчин')
   

   
  })
})