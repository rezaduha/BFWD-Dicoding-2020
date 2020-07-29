import "./character-item.js";

class CharacterList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set characters(characters) {
    this._characters = characters;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        h2 {
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      <style>
    `;

    this.shadowDOM.innerHTML += `<h2>⚠${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._characters.forEach((character) => {
      const characterItemElement = document.createElement("character-item");
      characterItemElement.character = character;
      this.shadowDOM.appendChild(characterItemElement);
    });
  }
}

customElements.define("character-list", CharacterList);
