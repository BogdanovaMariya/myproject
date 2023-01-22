describe('sonnik', () => {
    it('test',() => {
        cy.visit('https://horo.mail.ru/sonnik/')
        cy.get('.input__field').type('Соб')
        cy.contains('Толковать сон').click()
    })
})
