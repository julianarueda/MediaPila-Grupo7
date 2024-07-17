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
            <a href="./perfil.html" id="perfil-link">MI PERFIL</a>
            <a href="./mis_grupos.html" id="grupos-link">MIS GRUPOS</a>
            <a href="./actividades.html" id="actividades-link">ACTIVIDADES</a>
            </div>
        </nav>

      `;

      this.setActiveLink();
    }
    setActiveLink() {
      const path = window.location.pathname.split('/').pop();
      const links = {
        'perfil.html': 'perfil-link',
        'mis_grupos.html': 'grupos-link',
        'actividades.html': 'actividades-link'
      };

      const activeLinkId = links[path];
      if (activeLinkId) {
        const activeLink = this.querySelector(`#${activeLinkId}`);
        if (activeLink) {
          activeLink.classList.add('active');
          activeLink.setAttribute('aria-disabled', 'true');
          activeLink.style.pointerEvents = 'none';
          activeLink.style.cursor = 'default';
        }
      }
    }
}

  customElements.define('header-component', Header);

