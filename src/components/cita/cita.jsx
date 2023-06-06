import { BiCompass } from "react-icons/bi";

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
        <div className="card-text d-flex justify-content-between">
          <div>{date}</div> <div>{time}</div>
        </div>
        <div className="pt-3 pb-4">
          <h5 className="m-0 p-0">Sintomas</h5>
          {symptoms}
        </div>
        <button className="btn btn-danger" onClick={deleteAppointment}>
          <BiCompass />
          <span className="ml-5">Cita finalizada</span>
        </button>
      </div>
    </div>
  );
};

export { Cita };
