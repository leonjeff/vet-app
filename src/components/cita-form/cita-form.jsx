const CitaForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label>Nombre Mascota</label>
        <input />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label>Nombre dueño</label>
        <input type="text" />
      </div>
      <div className="mb-3 form-check">
        <input type="date" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1"></label>
      </div>
      <div className="mb-3 form-check">
        <input type="time" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <div>
        <textarea />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export { CitaForm };
