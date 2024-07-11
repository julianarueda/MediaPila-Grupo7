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
eventos.push(new Concierto("3 personas para ir a ver a Ciro","Movistar Arena","08-08-2024","20:00","4","Ciro y los Persas","Rock"))
eventos.push(new Concierto("Ver a Maria Becerra con 3 chicas","Monumental - River","10-10-2024","19:00","4","Reguetón"))
eventos.push(new Concierto("Ver a Babasónicos","Plaza de la música- Córdoba","08-11-2024","20:30","3","Pop Rock"))
eventos.push(new Concierto("Ver a Las Pastillas del Abuelo","Villa Ballester","13-07-2024","18:00","4","Pastillas del Abuelo","Rock"))
eventos.push(new Concierto("Ver a Eric Clapton","Estadio José Amalfitani- cancha Vélez","20-09-2024","18:00","3","Rock"))
eventos.push(new Concierto("Ver Iron Maiden","Estadio Tomás Adolfo Ducó- cancha Huracán","01-12-2024","19:00","4","Metal"))

//Agrego deportes
eventos.push(new Deporte("3 personas para el padel","Complejo deportivo Gonnet","14-07-2024","20:00","4","Deportivo"))
eventos.push(new Deporte("9 para jugar al futbol","Cancha Predio Norte","21-07-2024","21:00","10","Deportivo"))
eventos.push(new Deporte("3 para tenis","Predio Agua Potable","13-07-2024","10:00","4","Deportivo"))
eventos.push(new Deporte("4 para turno de hockey","Predio club universitario","16-07-2024","16:00","5","Deportivo"))
eventos.push(new Deporte("1 para ajedrez","Plaza San Martín","11-07-2024","12:00","2","Deportivo"))
eventos.push(new Deporte("3 para correr","El Rosedal de Palermo","15-07-2024","19:00","4","Deportivo"))



//Agrego domingueando
eventos.push(new Domingueando("3 personas para tomar mates","Plaza Moreno","14-07-2024","15:00","4","Recreativo"))
eventos.push(new Domingueando("5 para ir a cenar a un tenedor libre","Parrilla El Retiro","14-07-2024","21:00","5","Recreativo"))
eventos.push(new Domingueando("2 para ir a pescar","Laguna la Salada","21-07-2024","06:00","3","Recreativo"))
eventos.push(new Domingueando("1 para ir al cine a ver Intensamente 2","Cinema Rocha","14-07-2024","18:00","2","Recreativo"))
eventos.push(new Domingueando("3 para hacer club de lectura","Café La Callecita","28-07-2024","16:00","4","Recreativo"))
eventos.push(new Domingueando("4 para ver final de Copa América","Antares Cervecería","14-07-2024","20:30","5","Recreativo"))