import { useState } from "react";
import "./styles.css";
import { Navbar } from "../../components/Navbar";

export function Home() {
  const [placaVeiculo, setPlacaVeiculo] = useState("");
  const [nomeProprietario, setNomeProprietario] = useState("");
  const [nomeApartamento, setNomeApartamento] = useState("");
  const [blocoApartamento, setBlocoApartamento] = useState("");
  const [modeloVeiculo, setModeloVeiculo] = useState("");
  const [corVeiculo, setCorVeiculo] = useState("");
  const [vagaEstacionamento, setVagaEstacionamento] = useState("");

  function Cadastrar() {
    
  }

  return (
    <>
      <Navbar />
      <div className="principal">
        <form className="cadastro-form">
          <h2>Cadastro do Estacionamento</h2>
          <div className="input-group">
            <label htmlFor="nomedoproprietario">Nome do proprietario:</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlFor="placadoveiculo">Placa do veiculo:</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlFor="numeroApartamento">Número do Apartamento:</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlFor="blocoAPartamento">Bloco do Apartamento</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlFor="modeloVeiculo">Modelo de Veículo:</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlFor="corVeiculo">Cor do Veículo:</label>
            <input
            />
          </div>
          <div className="input-group">
            <label htmlfor="Numerodavaga">Numero da vaga</label>
            <input></input>

          </div>
          <div className="button-div">
            <button title="Cadastrar" onClick={Cadastrar}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
