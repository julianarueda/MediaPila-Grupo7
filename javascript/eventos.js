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

    getTipo(){
        return ["Rock","Pop","Reggeton"]
    }

}

class Deporte extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoDeporte, link) {
        super(titulo, lugar, fecha, horario, cantidadPersonas, link)
        this.tipo = tipoDeporte
    }

    getTipo(){
        return ["Futbol"]
    }

}

class Domingueando extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoComida, link) {
        super(titulo, lugar, fecha, horario, cantidadPersonas, link)
        this.tipo = tipoComida
    }

    getTipo(){
        return ["Futbol"]
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


let filtros = {
    fecha: null,
    lugar: null,
    tipo: null
};

function agregarFiltro(tipo, valor) {
    filtros[tipo] = valor !== "" ? valor : null;
    filtrarEventos();
}

function filtrarEventos() {
    let eventosFiltrados = eventos;

    if (filtros.fecha) {
        eventosFiltrados = eventosFiltrados.filter(evento => evento.fecha === filtros.fecha);
    }
    if (filtros.lugar) {
        eventosFiltrados = eventosFiltrados.filter(evento => evento.lugar === filtros.lugar);
    }
    if (filtros.tipo) {
        eventosFiltrados = eventosFiltrados.filter(evento => evento.tipo === filtros.tipo);
    }

    mostrarEventos(eventosFiltrados);
}

mostrarEventos(eventos);