// components/eventos/Evento2.jsx
import Button from "./Button";

function Evento2() {
  function meuEvento() {
    window.open(
      "https://www.youtube.com/watch?v=TcBYBukjkBY&list=RDTcBYBukjkBY&start_radio=1",
      "_blank"
    );
  }

  return <Button event={meuEvento} text="Abrir vídeo no YouTube" />;
}

export default Evento2;
