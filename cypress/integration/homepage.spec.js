context('Homepage tests', () => {
  it('should show the homepage', () => {
    cy.visit('/')
    cy.contains('Homepage')
  })
  it('should show a list of fruit', () => {
    cy.server()
    cy.route('/fruit.json', [
      'apple',
      'orange',
      'pear'
    ])

    cy.visit('/')
    const ul = cy.get('ul')
    
    ul.get('li').contains('apple')
    ul.get('li').contains('orange')
    ul.get('li').contains('pear')
  })
})