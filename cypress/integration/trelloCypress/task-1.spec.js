import TrelloBoard from "../../support/Page-object/trello-board/functions";

describe('Task 1', () => {

  it('Trello Task', () => {
    TrelloBoard.launchTrello();
    TrelloBoard.loginTrello();
    TrelloBoard.createNewBoard();
    TrelloBoard.createListAandB();
    TrelloBoard.addCardInListA();
    TrelloBoard.dragAndDropCard();
    TrelloBoard.getXandYCoordinates();
    TrelloBoard.logoutTrello();

  })
})