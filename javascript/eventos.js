class Evento {
    constructor(titulo, lugar, fecha, horario, cantidadPersonas) {
        this.titulo = titulo
        this.lugar = lugar
        this.fecha = fecha
        this.horario = horario
        this.cantidadPersonas = cantidadPersonas
    }
}

class Concierto extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, artista, generoMusical) {
        super(titulo, lugar, fecha, horario, cantidadPersonas)
        this.artista = artista
        this.tipo = generoMusical
    }

}

class Deporte extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoDeporte) {
        super(titulo, lugar, fecha, horario, cantidadPersonas)
        this.tipo = tipoDeporte
    }

}

class Domingueando extends Evento{
    constructor(titulo, lugar, fecha, horario, cantidadPersonas, tipoComida) {
        super(titulo, lugar, fecha, horario, cantidadPersonas)
        this.tipo = tipoComida
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
            <a class="btn-unirme">Unirme</a>      
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

let eventos = []

//Agrego conciertos

eventos.push(new Concierto("3 personas para ir a ver a ciro","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))
eventos.push(new Concierto("Ver a Becerra con 3 chicas","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))
eventos.push(new Concierto("Ver a Babasónicos","Monumental - River","10-10-2024","21:00","3","Ciro y los Persas","Rock"))
eventos.push(new Concierto("Necesito 4 personas para ver a Las Pastillas del Abuelo","Monumental - River","10-10-2024","21:00","4","Pastillas del Abuelo","Rock"))

//Agrego deportes
eventos.push(new Deporte("3 personas para el padel","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))
eventos.push(new Deporte("9 para jugar al futbol","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))

//Agrego domingueando
eventos.push(new Domingueando("3 personas para tomar mates","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))
eventos.push(new Domingueando("5 para ir a cenar a un tenedor libre","Monumental - River","10-10-2024","21:00","5","Ciro y los Persas","Rock"))

