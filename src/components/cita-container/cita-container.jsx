import "./cita-container.css";

const CitaContainer = ({ citaForm, citaList, isLoggedIn }) => {
  return (
    isLoggedIn && (
      <div className="cita-container">
        <div className="cita-container-form">{citaForm}</div>
        <div className="cita-container-lista">{citaList}</div>
      </div>
    )
  );
};

export { CitaContainer };
