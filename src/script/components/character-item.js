class CharacterItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set character(character) {
    this._character = character;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            .card {
                cursor: pointer;
                background-color: transparent;
                height: 300px;
                perspective: 1000px;
                box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
            }
          
            .card h1 {
                font-size: 25px;
                text-decoration: underline 5px rgba(0, 0, 0, 0.2);
                border-bottom: 1px #fff solid;
                padding: 10px;
                margin-bottom: 10px;
            }
            
            .card img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 10px;
            }
            
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transition: transform 0.8s;
                transform-style: preserve-3d;
            }
            
            .card:hover .card-inner {
                transform: rotateY(180deg);
            }
            
            .card-front,
            .card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            
            .card-back {
                background-color: #333;
                color: white;
                transform: rotateY(180deg);
                border-radius: 10px;
            }
            
            .card li {
                list-style: none;
                padding: 5px 10px;
            }

            span {
                font-size: small;
                padding: 0 5px;
                border-radius: 20px;
            }

            [title*="Alive"] {    
                background-color: green;   
            }

            [title*="Deceased"] {
                background-color: red;
            }

            [title*="dead"] {
                background-color: black;
            }

            [title*="Unknown"] {
                background-color: #555;
            }
        </style>

        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${this._character.img}" atl="Character Image" />
                </div>
                <div class="card-back">
                    <h1>${this._character.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> ${this._character.portrayed}
                        </li>
                        <li>
                            <strong>Nick Name:</strong> ${this._character.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> ${this._character.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> <span title="${this._character.status}"> ${this._character.status}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("character-item", CharacterItem);
