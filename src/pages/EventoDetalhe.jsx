import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

function EventoDetalhe() {
  const { id } = useParams();

  const [evento, setEvento] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarEvento() {
      try {
        const resposta = await axios.get(`http://localhost:3001/eventos/${id}`);
        setEvento(resposta.data);
      } catch (excecao) {
        console.error(excecao);
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }
    carregarEvento();
  }, [id]);

  if (carregando) {
    return <p className="aviso">Carregando evento...</p>;
  }

  if (erro) {
    return (
      <p className="aviso">
        Não foi possível carregar o evento. Ele pode não existir, ou a API pode estar fora do ar.
      </p>
    );
  }

  return (
    <article className="detalhe">
      <Link to="/" className="voltar">← Voltar para a lista</Link>
      <span className="detalhe-tipo">{evento.tipo}</span>
      <h2>{evento.titulo}</h2>
      <p className="detalhe-info"><strong>Data:</strong> {evento.data}</p>
      <p className="detalhe-info"><strong>Local:</strong> {evento.local}</p>
      <p className="detalhe-info"><strong>Palestrante:</strong> {evento.palestrante}</p>
      <p className="detalhe-vagas">{evento.vagas} vagas disponíveis</p>
    </article>
  );
}

export default EventoDetalhe;