import { Link } from "react-router";
import "./EventoCard.css";

function EventoCard({ id, titulo, tipo, data, local, vagas, palestrante }) {
  return (
    <article className="evento-card">
      <span className="evento-tipo">{tipo}</span>
      <h3>{titulo}</h3>
      <p className="evento-info">{data} — {local}</p>
      <p className="evento-vagas">{vagas} vagas disponíveis</p>
      <p className="evento-palestrante">Palestrante: {palestrante}</p>
      <Link to={`/eventos/${id}`} className="evento-link">
        Ver detalhes
      </Link>
    </article>
  );
}

export default EventoCard;