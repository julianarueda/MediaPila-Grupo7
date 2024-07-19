class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-lg" id="barraDeNavegación">
            <div class="container-sm">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a class="navbar-brand mx-auto" href="D:/usuarios/alumno/documentos/GitHub/MediaPila-Grupo7/templates/actividades.html">
                        <img src="../img/Logo.png" class="circular-img" alt="Centered Image" id="logoDeForm">
                    </a>
                </div>
            </div>
        </nav>
      `;
    }
  }
  customElements.define('header-component', Header);