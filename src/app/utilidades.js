const formatFecha = (fecha) => {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC" 
  };

  
  const fechaUTC = new Date(fecha + 'T00:00:00Z');
  return fechaUTC.toLocaleDateString("es-GT", options);
};
function convertirMinutosAHoras(minutos) {
  if (minutos < 60) {
      return `${minutos} min`;
  } else {
      const horas = Math.floor(minutos / 60);
      const minutosRestantes = minutos % 60;
      if (minutosRestantes === 0) {
          return `${horas} hrs`;
      } else {
          return `${horas} hrs ${minutosRestantes} min`;
      }
  }
}

export { formatFecha, convertirMinutosAHoras};
