import { deleteUserFb } from "../../../src/firebase/usersController"

/* eslint-disable no-undef */
describe('XDSHOP Users Logic', () => {

  beforeEach(()=>{
    cy.visit("/")
  })

  it("render", () => {
    cy.contains("XD SHOP RELOADED")
  })

  it("Access login route", () => {
    cy.contains("Login").click()
    cy.contains("... o ingresa con tu cuenta de Google")
  })

  it("Access Signup route", () => {
    cy.contains("Sign up").click()
    cy.contains("¡Registrate para obtener acceso a XD SHOP!")
  })

  // it("Register a User", async () => {
  //   const email = "xd-shop@gmail.com"
  //   const password = "admin12345"

  //   cy.contains("Sign up").click()
  //   cy.contains("¡Registrate para obtener acceso a XD SHOP!")
  //   cy.get("input[placeholder='yourmail@mail.com']").type(email)
  //   cy.get("input[placeholder='Your Password']").type(password)
  //   cy.contains("Sign Up").click()
  //   cy.contains("Bienvenido a XD SHOP!!! :)")
  //   cy.contains("Welcome " + email)

  // })

  it("Login Existing User",()=>{
    const email = "xd-shop@gmail.com"
    const password = "admin12345"

    cy.contains("Login").click()
    cy.get("input[placeholder='yourmail@mail.com']").type(email)
    cy.get("input[placeholder='Your Password']").type(password)
    cy.get("button.form-btn").click()
    cy.contains("Welcome " + email)
    cy.contains("Log out")
  })

})


describe("XDShop Notes Logic",()=>{
  beforeEach(()=>{
    cy.visit("/")
  })
  it("No Login",()=>{
    const txt = "Log in to see your notes"
    cy.get('#tasklist').click()
    cy.contains(txt).should('be.visible')
    cy.get("input[placeholder='Titulo de la tarea']").should('have.attr', 'disabled');
    cy.get("textarea[placeholder='Descripción de la tarea']").should('have.attr', 'disabled');
    cy.contains("Añadir").should('have.attr', 'disabled');
  })

  it("Create notes after Login",()=>{
    const email = "xd-shop@gmail.com"
    const password = "admin12345"

    cy.contains("Login").click()
    cy.get("input[placeholder='yourmail@mail.com']").type(email)
    cy.get("input[placeholder='Your Password']").type(password)
    cy.get("button.form-btn").click()
    cy.wait(3000)
    cy.get('#tasklist').click()
    cy.get("input[placeholder='Titulo de la tarea']").type("Titulo de Prueba")
    cy.get("textarea[placeholder='Descripción de la tarea']").type("Descripción de Prueba")
    cy.contains("Añadir").click()
    cy.contains("Titulo de Prueba")
    cy.contains("Descripción de Prueba")


  })
})