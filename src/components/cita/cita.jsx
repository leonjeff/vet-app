const Cita = ({ nombreMascota, nombreDueno, fecha, hora, sintomas }) => {
  return (
    <div class="card">
      <h1 class="card-header">{nombreMascota}</h1>
      <div class="card-body">
        <div class="card-title">{nombreDueno}</div>
        <p class="card-text">
          <div>{fecha}</div> <div>{hora}</div>
        </p>
        <div>{sintomas}</div>
        <button class="btn btn-primary">Cita finalizada</button>
      </div>
    </div>
  );
};

export { Cita };
