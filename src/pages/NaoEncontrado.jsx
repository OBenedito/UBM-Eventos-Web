import { Link } from "react-router";

function NaoEncontrado() {
  return (
    <section className="aviso">
      <p>Página não encontrada.</p>
      <Link to="/" className="voltar">Voltar para a lista de eventos</Link>
    </section>
  );
}

export default NaoEncontrado;