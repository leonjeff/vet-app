import "./cita-container.css";

const CitaContainer = ({ citaForm, citaList, isLoggedIn }) => {
  return (
    isLoggedIn && (
      <div className="container">
        <div className="row pt-5">
          <div className="col m-3">{citaForm}</div>
          <div className="col m-3">{citaList}</div>
        </div>
      </div>
    )
  );
};

export { CitaContainer };
