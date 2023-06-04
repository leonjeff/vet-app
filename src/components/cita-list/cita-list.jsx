/*"lista" es el array de objetos que viene del estado y 
que se debe iterar para mostrar en el componente cita sus propiedades */

import { Cita } from "../cita";

const datesListArray = [
  {
    petName: "Bella",
    ownersName: "Emily Johnson",
    appointmentDate: "15/06/2023",
    appointmentTime: "10:30",
    symptoms: "Letargo y pérdida de apetito.",
    isActive: true,
  },
  {
    petName: "Max",
    ownersName: "David Thompson",
    appointmentDate: "02/07/2023",
    appointmentTime: "14:45",
    symptoms: "Tos y estornudos.",
    isActive: true,
  },
  {
    petName: "Luna",
    ownersName: "Sarah Davis",
    appointmentDate: "19/06/2023",
    appointmentTime: "11:15",
    symptoms: "Picazón en la piel y pérdida de cabello.",
    isActive: true,
  },
  {
    petName: "Charlie",
    ownersName: "Michael Wilson",
    appointmentDate: "10/07/2023",
    appointmentTime: "09:00",
    symptoms: "Vómitos y diarrea.",
    isActive: true,
  },
  {
    petName: "Lucy",
    ownersName: "Jessica Thompson",
    appointmentDate: "03/06/2023",
    appointmentTime: "16:30",
    symptoms: "Dificultad para respirar y sibilancias.",
    isActive: true,
  },
  {
    petName: "Rocky",
    ownersName: "Christopher Adams",
    appointmentDate: "22/06/2023",
    appointmentTime: "13:45",
    symptoms: "Sed excesiva y micción frecuente.",
    isActive: true,
  },
  {
    petName: "Milo",
    ownersName: "Olivia Martinez",
    appointmentDate: "05/07/2023",
    appointmentTime: "10:00",
    symptoms: "Patas hinchadas y cojera.",
    isActive: true,
  },
  {
    petName: "Coco",
    ownersName: "Daniel Lee",
    appointmentDate: "12/06/2023",
    appointmentTime: "15:15",
    symptoms: "Pérdida de peso y disminución del apetito.",
    isActive: true,
  },
  {
    petName: "Buddy",
    ownersName: "Sophia Turner",
    appointmentDate: "25/06/2023",
    appointmentTime: "12:30",
    symptoms: "Micción frecuente y accidentes.",
    isActive: true,
  },
  {
    petName: "Sadie",
    ownersName: "William Harris",
    appointmentDate: "08/07/2023",
    appointmentTime: "11:45",
    symptoms: "Cojera y dificultad para caminar.",
    isActive: true,
  },
];

console.log(datesListArray);

const CitaList = () => {
  return (
    <div style={{ border: "10px solid orange", height: "300px" }}>
      <ul style={{ listStyle: "none" }}>
        {datesListArray.map((cita, index) => {
          return (
            <li key={index}>
              <Cita
                nombreMascota={cita.petName}
                nombreDueno={cita.ownersName}
                fecha={cita.appointmentDate}
                hora={cita.appointmentTime}
                sintomas={cita.symptoms}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { CitaList };
