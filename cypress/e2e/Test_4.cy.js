describe('sonnik', () => {
    it('test',() => {
        cy.visit('https://horo.mail.ru/sonnik/')
        cy.get('.input__field').type('Атлас географический')
        cy.contains('Толковать сон').click()
    })
})