/// <reference types="cypress" />

describe("Listagem", () => {
    it("Quando não houver cadastros, então a lista deve ser vazia", () => {
        window.localStorage.setItem('data', JSON.stringify(
            []
        ))

        cy.visit("https://form-agilizei.netlify.app/listagem.html")
        cy.get('table tdody tr').should('have.length', 0)
    })

    it("Quando houver cadastros, então a lista deve ser preenchida", () => {
        window.localStorage.setItem('data', JSON.stringify(
            [{
                "firstName":"LUANA",
                "lastName":"MACHADO",
                "adress":"Avenida Gustavo Santos Ribeiro\nCansanção",
                "emailAdress":"euluah@gmail.com",
                "radioGender":"f",
                "checks":["Livros","Dormir"],
                "selectCountries":"Austrália",
                "selectYears":"2016",
                "selectMonths":"Março",
                "pwd":"1234Aa"
            }]
        ))
        cy.visit('https://form-agilizei.netlify.app/listagem.html')
        cy.get('table tbody tr').should('have.length', 1)
        
        /* cy.getAllLocalStorage().then((result) => {
            console.log(result)
            expect(result.firstName).to.equal('LUANA')
        })
        */
    })
})