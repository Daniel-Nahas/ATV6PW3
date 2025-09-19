// components/eventos/Evento5.jsx
import { useState } from "react";
import Button from "./Button";

function Evento5() {
  const [hora, setHora] = useState("");

  function meuEvento() {
    const agora = new Date().toLocaleTimeString();
    setHora(agora);
  }

  return (
    <div>
      <Button event={meuEvento} text="Mostrar hora atual" />
      {hora && <p>Agora são {hora}</p>}
    </div>
  );
}

export default Evento5;
