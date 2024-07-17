class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg" id="barraDeNavegación">
            <div class="logo">
                <a href="/">
                  <img class="circular-img" src="../img/Logo.png" alt="Logo">
                </a>
            </div>
            <div id="items-navbar">
            <a href="./perfil.html">MI PERFIL</a>
            <a href="./mis_grupos.html">MIS GRUPOS</a>
            </div>
        </nav>

      `;
    }
  }
  customElements.define('header-component', Header);