//Filtros que se utilizan dentro de domingueando, deportes y concierto
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

//Función para ir agregando filtros usando el select
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