// components/Form.jsx
import { useState } from "react";
import '../index.css';

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function cadastrarUsuario(event) {
    event.preventDefault();
    console.log(`User: ${name} cadastrado com a senha: ${password}`);
    console.log("Cadastrou com Sucesso!!");

    alert(`Filme ${name} cadastrado com sucesso!`);
  }

  return (
    <>
      <h1>Cadastro de Filme Favorito:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div className="form">
          <label htmlFor="name">Nome do Filme: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome do Filme!"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form">
          <label htmlFor="date">Ano do filme: </label>
          <input
            type="date"
            id="ano"
            name="ano"
            placeholder="Digite ano de LANÇAMENTO do Filme:"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="formInput">
          <input id="input" type="submit" value="Cadastrar Filme" />
        </div>
      </form>
    </>
  );
}

export default Form;
