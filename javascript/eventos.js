class Evento {
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, link) {
        this.titulo = titulo
        this.lugar = lugar
        this.fecha = fecha
        this.horario = horario
        this.cantidadPersonas = cantidadPersonas
        this.link = link
    }
}

class Concierto extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, artista, generoMusical, link) {
        super(titulo, lugar, fecha, horario, cantidadPersonas, link)
        this.artista = artista
        this.tipo = generoMusical
    }

    static getTipo(){
        return ["Rock", "Reguetón", "Pop Rock", "Metal","Alternative Hip-Hop","Grunge","Funk Rock","Hip-Hop","R&B"]
    }

}

class Deporte extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoDeporte, link) {
        super(titulo, lugar, fecha, horario, cantidadPersonas, link)
        this.tipo = tipoDeporte
    }

    static getTipo(){
        return [
            "Voley",
            "Basket",
            "Carrera",
            "Yoga",
            "Zumba",
            "Tenis",
            "Natación",
            "Rugby",
            "Boxeo",
            "Ciclismo",
            "Pilates",
            "Crossfit",
            "Escalada",
            "Golf",
            "Handball",
            "Kickboxing",
            "Meditación",
            "Fútbol",
            "Danza",
            "Remo",
            "Ajedrez",
            "Cricket",
            "Judo",
            "Lucha Libre",
            "Artes Marciales Mixtas",
            "Tiro con Arco",
            "Tai Chi",
            "Squash",
            "Stretching",
            "Defensa Personal",
            "Esgrima"
        ];
    }

}

class Domingueando extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoComida, link) {
        super(titulo, lugar, fecha, horario, cantidadPersonas, link)
        this.tipo = tipoComida
    }

    static getTipo(){
        return ["Tomar mates", "Cenar fuera", "Pescar", "Leer", "Ver películas", "Ver partidos"]
    }

}

function mostrarEventos(eventosAMostrar) {
    const eventosContainer = document.getElementById('eventos-container');
    // Limpiar el contenedor antes de agregar los eventos
    eventosContainer.innerHTML = '';

    // Iterar sobre el array de eventos y crear elementos HTML para cada uno
    eventosAMostrar.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('item');
        // Crear el contenido HTML para cada evento
        eventoDiv.innerHTML = `
            <div class="txt text-center">
                <h4>${evento.titulo}</h4>
                <span><strong>${evento.fecha} en ${evento.lugar}<strong></span>
            </div>
            <div class="txt">
                <span>Horario: ${evento.horario}</span><br/>
                <span>Cantidad de personas: ${evento.cantidadPersonas}</span><br/>
                <span>Tipo: ${evento.tipo}</span>
            </div>
            <a href="${evento.link}" class="btn-unirme">Unirme</a>      
        `;
    // Agregar el evento al contenedor principal
        eventosContainer.appendChild(eventoDiv);
    });

}

function mostrarConciertos(){
    const conciertos = eventos.filter(evento => evento instanceof Concierto);
    mostrarEventos(conciertos);
}

function mostrarDeportes(){
    const deportes = eventos.filter(evento => evento instanceof Deporte);
    mostrarEventos(deportes);
}

function mostrarDomingueando(){
    const domingueando = eventos.filter(evento => evento instanceof Domingueando);
    mostrarEventos(domingueando);
}

function updateTipoOptions(){
    let categorySelect = document.getElementById('categoria-select');
    let tipoSelect = document.getElementById('tipo-select');

    // Obtener la categoría seleccionada
    const selectedCategory = categorySelect.value;

    // Limpiar las opciones anteriores del subcategory-select
    tipoSelect.innerHTML = '';

    // Obtener las nuevas opciones basadas en la categoría seleccionada
    let options = [];

    switch(selectedCategory) {
        case "concierto":
          options = Concierto.getTipo();
          break;
        case "deporte":
            options = Deporte.getTipo();
          break;
        case "domingueando":
            options = Domingueando.getTipo();
          break;
        default:
          // code block
      }


    // Crear y agregar las nuevas opciones al subcategory-select
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        tipoSelect.appendChild(optionElement);
    });
}

let filtros = {
    tipo: null
};

function agregarFiltro(tipo, valor, selectedCategory) {
    filtros[tipo] = valor !== "" ? valor : null;

    let eventosFiltrados = [];
    
    switch(selectedCategory) {
        case "concierto":
            eventosFiltrados = eventos.filter(evento => evento instanceof Concierto);
          break;
        case "deporte":
            eventosFiltrados = eventos.filter(evento => evento instanceof Deporte);
          break;
        case "domingueando":
            eventosFiltrados = eventos.filter(evento => evento instanceof Domingueando);
          break;
        default:
          // code block
      }

    filtrarEventos(eventosFiltrados);
}

function filtrarEventos(eventosFiltrados) {

    if (filtros.tipo) {
        eventosFiltrados = eventosFiltrados.filter(evento => evento.tipo === filtros.tipo);
    }

    mostrarEventos(eventosFiltrados);
}

let eventos = []

mostrarEventos(eventos);

function agregarTipos(tipoDeEvento){
    const selectElement = document.getElementById('filtro-tipo');

    let tipos = [];
    let textContent = "";

    switch(tipoDeEvento) {
        case "concierto":
            tipos = Concierto.getTipo();
            textContent = "Todos los géneros musicales";
          break;
        case "deporte":
            tipos = Deporte.getTipo();
            textContent = "Todos los deportes";
          break;
        case "domingueando":
            tipos = Domingueando.getTipo();
            textContent = "Todos los intereses";
          break;
        default:
          // code block
      }
    // Agregar la opción predeterminada
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = textContent;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);

    // Agregar las opciones devueltas por getTipo
    tipos.forEach(tipo => {
        const optionElement = document.createElement('option');
        optionElement.value = tipo;
        optionElement.textContent = tipo;
        selectElement.appendChild(optionElement);
    });
}