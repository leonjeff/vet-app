const CitaForm = ({
  petName,
  petNameChange,
  ownerName,
  ownerNameChange,
  date,
  dateChange,
  time,
  timeChange,
  symptoms,
  symptomsChange,
  addAppointment,
}) => {
  return (
    <div className="rounded shadow p-3 mb-5 bg-body-tertiary ">
      <h3 className="text-success">Añadir cita</h3>
      <hr className="pb-3" />
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre Mascota</label>
          <input
            type="text"
            className="form-control"
            value={petName}
            onChange={petNameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre dueño</label>
          <input
            type="text"
            className="form-control"
            value={ownerName}
            onChange={ownerNameChange}
          />
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={dateChange}
            />
          </div>
          <div className="col">
            <label className="form-label">hora</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={timeChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="textSymptomps" className="form-label">
            Sintomas
          </label>
          <textarea
            className="form-control"
            id="textSymptomps"
            rows="3"
            onChange={symptomsChange}
            value={symptoms}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-warning"
          onClick={addAppointment}
        >
          Nueva cita
        </button>
      </form>
    </div>
  );
};

export { CitaForm };
