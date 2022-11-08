/// <reference types="cypress" />
import { isJSDocLinkLike } from "typescript";
import Counter from "../../../src/components/counter";
import Counters from "../../../src/components/counters";
import NavBar from "../../../src/components/navbar";

// This would demostrate the performance under load with the looped amount of requests being sent via adding to cart 

describe("Stress testing the addition function", () => {
    it("Loop of the addition element to test performance under load", () => {

        cy.visit("http://localhost:3000/");
        Cypress._.times(500, () => {
            cy.get("[data-cy=submit]").dblclick({ multiple: true })
        });
    });
});

