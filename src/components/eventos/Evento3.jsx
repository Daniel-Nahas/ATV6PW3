// components/eventos/Evento3.jsx
import Button from "./Button";

function Evento3() {
  function meuEvento() {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightyellow"
        ? "#f9fafc"
        : "lightyellow";
  }

  return <Button event={meuEvento} text="Mudar cor do fundo" />;
}

export default Evento3;
