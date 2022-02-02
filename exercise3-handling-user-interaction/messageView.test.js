/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const messageInput = document.querySelector('#message-input');
    const message = 'This is a message';
    messageInput.value = message;

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('div#message').innerText).toEqual(message);
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showMessageBtnEl = document.querySelector('#show-message-button');
    showMessageBtnEl.click();
    const hideMessageBtnEl = document.querySelector('#hide-message-button');
    hideMessageBtnEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});