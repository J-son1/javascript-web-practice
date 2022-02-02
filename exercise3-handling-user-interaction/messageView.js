class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    const messageEl = document.createElement('div');
    messageEl.id = 'message';
    messageEl.innerText = 'This is a message displayed by JavaScript';
    document.querySelector('#main-container').append(messageEl);
  }
}

module.exports = MessageView;