/* eslint-disable no-undef */
/// <reference types="cypress" />

describe(  "Accomplishent Dashboard" ,()=>{
beforeEach(()=>{
    cy.visit("/rewards")
})

    it("should display a list of rewards" ,()=>{
cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days")
    })

    it("displays a lit of rewards from a mock" ,()=>{
      cy.intercept("GET", "http://localhost:4000/rewards", {
          fixture: "reward.json"
      })

      cy.get("ul").should("contain", "500 points for drinking 8 cups of water for 7 straight days")
            })
})