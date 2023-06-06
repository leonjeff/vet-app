import { useState, useEffect } from "react";
import { CitaContainer } from "./components/cita-container";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { CitaForm } from "./components/cita-form";
import { CitaList } from "./components/cita-list";
import { Cita } from "./components/cita";

import usersData from "./utils/users.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.find((userData) => userData.username === userName);

    if (user && user.password === password) {
      setError("");
      setShowSuccess(true);
      setShowError(true);
      setIsLoggedIn(true);
      setIsLoginFormVisible(false);

      console.log("Login successful!");
    } else {
      setError("Invalid username or password");
      setShowError(true);
    }
  };

  const changeFormVisibility = () => {
    setIsLoginFormVisible(true);
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const closeSession = () => {
    setIsLoggedIn(false);
  };

  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const petNameChange = (e) => {
    setPetName(e.target.value);
  };
  const ownerNameChange = (e) => {
    setOwnerName(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };
  const symptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const [appointment, setAppointment] = useState([
    {
      petName,
      ownerName,
      date,
      time,
      symptoms,
    },
  ]);

  const addAppointment = (e) => {
    e.preventDefault();

    const newAppointment = {
      petName,
      ownerName,
      date,
      time,
      symptoms,
    };

    setAppointment((prevAppointments) => [...prevAppointments, newAppointment]);

    setPetName("");
    setOwnerName("");
    setDate("");
    setTime("");
    setSymptoms("");
  };

  const deleteAppointment = (index) => {
    console.log("Deletion");
    setAppointment((prevAppointments) =>
      prevAppointments.filter((_, i) => i !== index)
    );
  };

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess, showError]);

  return (
    <div className="container-fluid">
      <Header />
      <Navbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        password={password}
        error={error}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        showSuccess={showSuccess}
        showError={showError}
        isLoginFormVisible={isLoginFormVisible}
        changeFormVisibility={changeFormVisibility}
        closeSession={closeSession}
      />
      <CitaContainer
        citaForm={
          <CitaForm
            petName={petName}
            petNameChange={petNameChange}
            ownerName={ownerName}
            ownerNameChange={ownerNameChange}
            date={date}
            dateChange={dateChange}
            time={time}
            timeChange={timeChange}
            symptoms={symptoms}
            symptomsChange={symptomsChange}
            addAppointment={addAppointment}
          />
        }
        citaList={
          <CitaList
            appointmentsList={appointment.map((appointment, index) => {
              return (
                <li key={index} className="py-2">
                  <Cita
                    petName={appointment.petName}
                    ownerName={appointment.ownerName}
                    date={appointment.date}
                    time={appointment.time}
                    symptoms={appointment.symptoms}
                    deleteAppointment={() => deleteAppointment(index)}

                  />
                </li>
              );
            })}
          />
        }
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
