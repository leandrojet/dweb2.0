import "./styles.css";

import { Navbar } from "../../components/Navbar";

export function VagasDisponiveis() {
  
  return (
    <>
      <Navbar />
      <div className="titulo">
        <h1>Vagas Disponíveis</h1>
        <p>Essas vagas estão disponiveis para serem ocupadas</p>
      </div>
      <div className="principal">

        <div className="vagas-box">
              <div className="elements-group">
                <h2>Vaga A-06</h2> 
              </div>  
        </div>

      <div className="vagas-box">
              <div className="elements-group">
                <h2>Vaga A-08</h2>
              </div>
      </div>
        <div className="vagas-box">
            <h2>Vaga A-10</h2>
        </div>
      </div>
    </>
  );
}
