/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance()

describe('Cadastro', () => {
  it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
    cy.visit('https://form-agilizei.netlify.app/index.html')
    cy.get('input[name=firstName]').type(chance.name())
    cy.get('input[name=lastName]').type(chance.last())
    cy.get('textarea[name=adress]').type(chance.address())
    cy.get('input[name=emailAdress]').type(chance.email())
    cy.get('input[value=m]').check()
    cy.get('input[type=checkbox]').check('Netflix')
    cy.get('select[id=countries]').select('Dinamarca',{ force: true })
    cy.get('select[id=years]').select('2006',{ force: true })
    cy.get('select[id=months]').select('Janeiro',{ force: true })
    cy.get('select[id=days]').select('8',{ force: true })
    cy.get('input[id=firstpassword]').type('12345asAs')
    cy.get('input[id=secondpassword]').type('12345asAs')

  cy.get('button[id=submitbtn]').click()
   
  cy.url().should('contain', 'listagem')
  })
})