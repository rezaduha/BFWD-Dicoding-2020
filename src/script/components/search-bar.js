class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .search-container {
        max-width: 500px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 5px;
        display: flex;
        margin: auto;
        margin-bottom: 70px;
        background: transparent;
      }
  
      .search-container > input {
        width: 75%;
        padding: 16px;
        font-size: 1.2em;
        border: 0;
        font-weight: bold;
      }
  
      .search-container > input:focus {
        outline: 0;
      }
  
      .search-container > input:focus::placeholder {
        color: #999;
        font-weight: bold;
      }
  
      .search-container >  input::placeholder {
        color: #999;
        font-weight: normal;
      }
  
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: black;
        color: white;
        border: 0;
        text-transform: uppercase;
        transition-duration: 150ms;
      }

      .search-container > button:hover {
        background-color: white;
        color: black;
      }
  
      @media screen and (max-width: 550px){
        .search-container {
          flex-direction: column;
          position: static;
        }
  
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
  
        .search-container > button {
          width: 100%;
        }
      }
    </style>
    <div id="search-container" class="search-container">
        <input placeholder="Search characters" id="searchElement" type="search" />
        <button id="searchButtonElement" type="submit">Search</button>
    </div>`;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
