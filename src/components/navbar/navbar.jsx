import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/logo.png";
import Button from "react-bootstrap/Button";

const Navbar = ({
  isLoggedIn,
  userName,
  handleUsernameChange,
  handlePasswordChange,
  password,
  handleSubmit,
  error,
  success,
  isFormVisible,
  changeFormVisibility,
}) => {
  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      className="bg-success px-3 py-3 d-flex justify-content-between"
    >
      {error && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            position: "absolute",
            width: "300px",
            left: "calc(50% - 150px)",
            textAlign: "center",
            zIndex: 9,
          }}
        >
          Usuario o password incorrectos!
        </div>
      )}
      {success && (
        <div
          className="alert alert-success"
          role="alert"
          style={{
            position: "absolute",
            width: "300px",
            left: "calc(50% - 150px)",
            textAlign: "center",
            zIndex: 9,
          }}
        >
          Login exitoso!
        </div>
      )}

      <Nav.Item as="div" className="d-flex align-items-center">
        <Nav.Item as="li">
          <Nav.Link className="text-white" href="/home">
            <img src={logo} />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link className="text-white" href="/home">
            Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white" eventKey="link-1">
            Acerca de
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white" eventKey="link-2">
            Contacto
          </Nav.Link>
        </Nav.Item>
      </Nav.Item>

      {!isFormVisible && (
        <Nav.Item as="div" className="d-flex align-items-center">
          <Nav.Item as="li">
            <Nav.Link className="text-white" eventKey="link-2">
              <Button variant="warning">Crear Cuenta</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="text-white" eventKey="link-2">
              <Button variant="warning" onClick={changeFormVisibility}>
                Iniciar Sesión
              </Button>
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
      )}

      {isFormVisible ? (
        <Nav.Item as="div" className="d-flex align-items-center">
          <Nav.Item as="li">
            <Nav.Link className="text-white" eventKey="link-2">
              <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="text"
                      value={userName}
                      onChange={handleUsernameChange}
                      className="form-control"
                      placeholder="Usuario"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      value={password}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Aceptar
                </button>
              </form>
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>
      ) : (
        !isFormVisible &&
        isLoggedIn && (
          <Nav.Item as="div" className="d-flex align-items-center">
            <Nav.Item as="li">
              <Nav.Link className="text-white" eventKey="link-2">
                Bienvenido: <h1>{userName} </h1>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="text-white" eventKey="link-2">
                <Button variant="warning">Cerrar Sesión</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav.Item>
        )
      )}
    </Nav>
  );
};

export { Navbar };
