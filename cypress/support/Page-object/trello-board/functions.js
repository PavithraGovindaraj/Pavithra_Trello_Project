const el = require("./elements").ELEMENTS;
class TrelloBoard {

    launchTrello(){
        cy.visit('https://trello.com');
        cy.get(".Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr[href='/login']").click();
    }

    loginTrello(){
        cy.get(el.emailTextBox).type("pavithragovindaraj98@gmail.com");
        cy.get(el.submitButton).click();
        cy.wait(2000);
        cy.get(el.passwordTextBox).type("Test@123");
        cy.get(el.loginSubmitButton).click();
        cy.wait(500);
    }

    createNewBoard(){
        const random = () => Cypress._.random(0, 1e6)
        const name = random()
        cy.get(el.createNewBoard).click({ force: true });
        cy.get(el.boardTitleTextBox).type('DemoTask'+ name);
        cy.get(el.createButton).click();
    }

    createListAandB(){
        cy.get(el.listTitle).type("A");
        cy.get(el.addList).click();
        cy.get(el.listTitle).type("B");
        cy.get(el.addList).click();
    }

    addCardInListA(){
        cy.get(el.addACard).eq(0).click();
        cy.get(".list-card-composer-textarea").type("Card-A");
        cy.get(":nth-child(1) > .nch-button").click();
    }

    dragAndDropCard(){
        cy.get(el.cardInitialPosition).drag(el.cardDestinationPosition);
    
    }

    getXandYCoordinates(){
        cy.get(el.cardAdded).then(
            ($button) => {
            let initialPosition = $button.position();
            cy.log(initialPosition);
            }
            );
    }

    logoutTrello(){
        cy.get(".yRPuNUIoZpQWwj").click();
        cy.get("button[data-testid='account-menu-logout']").click();
        cy.get(".css-19r5em7").click();
    }

}
export default new TrelloBoard();