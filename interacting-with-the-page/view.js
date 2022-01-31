class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    this.newPEl = document.createElement('p');
    this.newPEl.innerText = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(this.newPEl);
  }
}

module.exports = View;