import logo from "../../img/logo.png";

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        header {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        header {
          height: 200px;
        }
      
        header img {
          width: 200px;
        }
      </style>
      <header>
        <a href="/"><img src=${logo} alt="Logo" /></a>
      </header>`;
  }
}

customElements.define("app-bar", AppBar);
