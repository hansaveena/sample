import * as constant from './constants';
// import * as headerFooter from '../fixtures/selectors/headerfooter.json';
// import * as loginPage from '../fixtures/selectors/loginPage.json';
// import * as dashboardPage from '../fixtures/selectors/dashboardPage.json';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// let apiserver = Cypress.env('api_url');
// Cypress.Commands.add('login', (userType, options = {}) => {
//   cy.initiateApiOrchestrator();
//   // this is an example of skipping your UI and logging in programmatically

//   // setup some basic types
//   // and user properties
//   const types = {
//     testowner: constant.testownercidev2,
//     softdelete: constant.softdeletedev2,
//     basicuser: constant.basicuser,
//     owneruser: constant.owneruser,
//     viewuser: constant.viewuser,
//     adminuser: constant.adminuser,
//     invaliduser: constant.invaliduser
//   };

//   // grab the user
//   const user = types[userType];
//   cy.visit('/login', { timeout: 30000 });
//   cy.get(loginPage.username).type(user.email_id);
//   cy.get(loginPage.password).type(user.password + '{enter}');
//   cy.title().should('contain', 'Nokia Digital Automation Cloud');
//   cy.getCookie('nokia_cookieconsent_dismissed').then(data => {
//     if (!data) {
//       console.log(data);
//       cy.get(dashboardPage.cookieDismissBtn).click();
//     }
//   });
// });

// Cypress.Commands.add('verifyRole', (rolename, options = {}) => {
//   cy.get(headerFooter.menuBtn).click();
//   cy.get(headerFooter.profileOption)
//     .should('contain', 'Profile')
//     .click();
//   cy.get(headerFooter.profileRole).should('contain', rolename);
// });
