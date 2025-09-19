// components/eventos/Evento1.jsx
import { useState } from "react";
import Button from "./Button";

function Evento1() {
  const [mostrarImg, setMostrarImg] = useState(false);

  function meuEvento() {
    setMostrarImg(!mostrarImg);
  }

  return (
    <div>
      <Button event={meuEvento} text="Mostrar Bananas de Pijama" />
      {mostrarImg && (
        <img
          src="https://100fronteiras.com/wp-content/uploads/2023/03/25509213925.jpg"
          alt="Bananas de Pijama"
        />
      )}
    </div>
  );
}

export default Evento1;
