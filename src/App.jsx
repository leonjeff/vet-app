import { useState, useEffect } from "react";
import { CitaContainer } from "./components/cita-container";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { CitaForm } from "./components/cita-form";
import { CitaList } from "./components/cita-list";
import usersData from "./utils/users.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const changeFormVisibility = () => {
    setIsFormVisible(true);
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);

    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.find((userData) => userData.username === userName);

    if (user && user.password === password) {
      setError("");
      setSuccess(true);
      setIsLoggedIn(true);
      setIsFormVisible(false);

      console.log("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // 5 seconds
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert]);

  return (
    <div className="App">
      <Header />
      <Navbar
        isLoggedIn={isLoggedIn}
        username={userName}
        password={password}
        error={error}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        success={success}
        isFormVisible={isFormVisible}
        changeFormVisibility={changeFormVisibility}
      />
      <CitaContainer
        citaForm={<CitaForm />}
        citaList={<CitaList />}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
