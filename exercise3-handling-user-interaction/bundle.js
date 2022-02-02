(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideMessageBtnEl = document.querySelector("#hide-message-button");
          this.hideMessageBtnEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          const messageEl = document.createElement("div");
          messageEl.id = "message";
          messageEl.innerText = document.querySelector("#message-input").value;
          document.querySelector("#main-container").append(messageEl);
        }
        hideMessage() {
          const messageEl = document.querySelector("#message");
          messageEl.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
