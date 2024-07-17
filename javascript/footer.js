class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <footer id="FooterActividades">
            <div class="footer-container">
                <div class="footer-links">
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-social" >
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 No lo canceles! Todos los derechos reservados.</p>
            </div>
        </footer>

      `;
    }
  }
  customElements.define('footer-component', Footer);