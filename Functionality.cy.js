/// <reference types="cypress" />
import Counter from "../../../src/components/counter";
import Counters from "../../../src/components/counters";
import NavBar from "../../../src/components/navbar";

// Loads the app, adds values twice, check to see if a total of 4 is found in cart, removes values, refreshes the cart, removes 

describe("Basic functionality", () => {
    it("Ensures the addition element works", () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-cy="submit"]').dblclick();
    });

    it("Validates the additions made to the cart", () => {
        cy.contains(4).should('be.visible');
    });

    it("Removes a value of 1 from each cart adjuster", () => {
        cy.get('[data-cy="delete"]').click({ multiple: true });
    });

    it("Acknowledges the adjusted cart values", () => {
        cy.contains(1).should('be.visible');
    });

    it("Ensure the refresh element works correctly", () => {
        cy.get('[data-cy="refresh"]').click();
    });

    it("Removes the elements to add to the cart", () => {
        cy.get('[data-cy="remove"]').click({ multiple: true });
    })

    it("Validates that the elements are removed", () => {
        cy.get('[data-cy="submit"]').should('not.exist');
    });

    it("Ensures the recycle element works correctly", () => {
        cy.get('[data-cy="recycle"]').click();
    });

});




