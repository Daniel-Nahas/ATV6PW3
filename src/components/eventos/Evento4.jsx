// components/eventos/Evento4.jsx
import { useState } from "react";
import Button from "./Button";

function Evento4() {
  const [mensagem, setMensagem] = useState("");

  function meuEvento() {
    setMensagem("Continue estudando React, você está mandando bem!");
  }

  return (
    <div>
      <Button event={meuEvento} text="Mostrar mensagem motivacional" />
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Evento4;
