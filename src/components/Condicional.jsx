// components/Condicional.jsx
import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [senha, setSenha] = useState("");

  function enviarEmail(event) {
    event.preventDefault();
    setUserEmail(email);
    alert("Tentando cadastrar...");
  }

  return (
    <div>
      <h2>Cadastre seu email</h2>

      <form>
        <input
          type="email"
          placeholder="DIGITE SEU EMAIL"
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="DIGITE SUA SENHA"
          onChange={(event) => setSenha(event.target.value)}
        />

        <button type="submit" onClick={enviarEmail}>
          CADASTRAR
        </button>

        {/* Renderização condicional com && */}
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
