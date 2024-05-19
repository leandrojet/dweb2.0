import "./styles.css";

import { Navbar } from "../../components/Navbar";

export function VagasCadastradas() {
  
  return (
    <>
      <Navbar />
      <div className="titulo">
        <h1>Vagas Cadastradas</h1>
        <h2>Essas vagas não podem ser ocupadas</h2>
      </div>
      <div className="principal">
 
        <div className="vagas-box">
              <div className="elements-group">
                <h3>proprietario:</h3>
                <p>Carlos</p>
              </div>
              <div className="elements-group">
                <h4>placa do veiculo:</h4>
                <p>rcb78O9</p>
                <h4>Numero do AP:</h4>
                <p>01</p>
                <h4>Bloco do AP:</h4>
                <p>A</p>
              </div>
              <div className="elements-group">
                <h4>Modelo do veiculo:</h4>
                <p>Celta</p>
              </div>
              <div className="elements-group">
                <h4>Cor do veiculo:</h4>
                <p>preto</p>
                <h4>Numero da vaga</h4>
                <p>02</p>
              </div>
        </div>
              <div className="vagas-box"> 
              <div className="elements-group">
                <h4>Proprietario:</h4>
                <p>Maria</p>
              </div>
              <div className="elements-group">
                <h4>PLaca do veiculo:</h4>
                <p>Bcb68O1</p>
                <h4>Numero do AP:</h4>
                <p>02</p>
                <h4>Bloco do AP:</h4>
                <p>A</p>
              </div>
              <div className="elements-group">
                <h4>Modelo do veiculo:</h4>
                <p>Corsa</p>
              </div>
              <div className="elements-group">
                <h4>Cor do veiculo:</h4>
                <p>prata</p>
                <h4>Numero da vaga:</h4>
                <p>03</p>
              </div>
        </div>
        <div className="vagas-box">
              <div className="elements-group">
                <h4>Proprietário:</h4>
                <p>Eduardo</p>
              </div>
              <div className="elements-group">
                <h4>Placa do veiculo:</h4>
                <p>ADP57T7</p>
                <h4>Numero do Ap:</h4>
                <p>03</p>
                <h4>Bloco do AP:</h4>
                <p>A</p>
              </div>
              <div className="elements-group">
                <h4>Modelo do veiculo:</h4>
                <p>Clio</p>
              </div>
              <div className="elements-group">
                <h4>Cor do veiuclo:</h4>
                <p>vermelho</p>
                <h4>Numero da vaga:</h4>
                <p>04</p>
              </div>
        </div>
      </div>
    </>
  );
}
