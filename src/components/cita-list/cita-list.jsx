const CitaList = ({ appointmentsList, citasItem }) => {
  return (
    <div className="col">
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {appointmentsList}
      </ul>
    </div>
  );
};

export { CitaList };
