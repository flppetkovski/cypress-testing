/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("dashboard", ()=>{
    beforeEach(()=>{
        cy.visit("/habits")
    })

    it("should display a modal when add button is clicked", ()=>{
        cy.contains(/add/i).click()
        cy.contains(/add a new habit/i).should("be.visible")
    })

    it("should display a new card when a new habit is added", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water").should("be.visible").and("have.class", "HabitCard__habit-container")
    })

    it("should toggle class when card is clicked", ()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water").should("be.visible").and("have.class", "HabitCard__habit-container")
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")

    })
})