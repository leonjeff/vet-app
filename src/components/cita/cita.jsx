const Cita = ({
  petName,
  ownerName,
  date,
  time,
  symptoms,
  deleteAppointment,
}) => {
  return (
    <div className="card">
      <h1 className="card-header">{petName}</h1>
      <div className="card-body">
        <div className="card-title">{ownerName}</div>
        <div className="card-text">
          <div>{date}</div> <div>{time}</div>
        </div>
        <div>{symptoms}</div>
        <button className="btn btn-danger" onClick={deleteAppointment}>
          Cita finalizada
        </button>
      </div>
    </div>
  );
};

export { Cita };
