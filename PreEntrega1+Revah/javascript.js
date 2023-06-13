// Declaración de variables
let cantidadPartidos = 0;
let resultadosPartidos = [];
let torneosPartidos = [];
let asistenciaPartidos = [];

// Carga de un nuevo partido
function cargarPartido() {
  const torneo = prompt("Ingrese el torneo al que pertenece el partido:");
  const resultado = prompt("Ingrese el resultado del partido (número-número):");
  const asistencia = prompt("¿Asististe al partido? (Si o No):").toLowerCase();

  resultadosPartidos.push(resultado);
  torneosPartidos.push(torneo);
  asistenciaPartidos.push(asistencia);
  cantidadPartidos++;
}

// Mostrar datos cargados
function mostrarDatosCargados() {
  let datos = "";
  for (let i = 0; i < cantidadPartidos; i++) {
    datos += `Torneo: ${torneosPartidos[i]} - Resultado: ${resultadosPartidos[i]} - Asistencia: ${asistenciaPartidos[i]}\n`;
  }
  alert("Datos cargados:\n" + datos);
}

// Verificación filtro 
function verificarAutorizacion() {
  let asistioAlMenosUno = false;

  for (let i = 0; i < cantidadPartidos; i++) {
    if (asistenciaPartidos[i].toLowerCase() === "si") {
      asistioAlMenosUno = true;
      break;
    }
  }

  if (asistioAlMenosUno) {
    alert("Estás autorizado para asistir al siguiente partido.");
  } else {
    alert("No estás autorizado para asistir al siguiente partido.");
  }
}

// Cargar los resultados y la asistencia de 3 partidos 
while (cantidadPartidos < 3) {
  cargarPartido();
}

mostrarDatosCargados();
verificarAutorizacion();
