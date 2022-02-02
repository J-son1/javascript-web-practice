class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideMessageBtnEl = document.querySelector('#hide-message-button');

    this.hideMessageBtnEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    const messageEl = document.createElement('div');
    messageEl.id = 'message';
    messageEl.innerText = 'This is a message displayed by JavaScript';
    document.querySelector('#main-container').append(messageEl);
  }

  hideMessage() {
    const messageEl = document.querySelector('#message');
    messageEl.remove()
  }
}

module.exports = MessageView;