describe('sonnik', () => {
  it('test',() => {
      cy.visit('https://horo.mail.ru/sonnik/')
      cy.get('.input__field').type('Кошки')
      cy.contains('Толковать сон').click()
      cy.contains('Пантера').click()
      


  })
})
