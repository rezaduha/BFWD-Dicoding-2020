class FootBar extends HTMLElement {
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
        .content {
            padding: 20px;
            background: black;
            color: white;
            margin-top: 30px;
        }
        p {
            text-align: center;
            text-decoration: underline 5px #123412;
        }
      </style>
      <section class="content">
        <p>&#169; Dicoding Submission 2020 &#5125; RFZD</p>
      </section>
      `;
  }
}

customElements.define("foot-bar", FootBar);
