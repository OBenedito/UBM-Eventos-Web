import Header from "./Header";
import "./App.css";

function App() {
  const curso = 'Engenharia de Software'

  return (
    <>
      <Header />
      <div className="app">
        <p>Portal de eventos acadêmicos — {curso}</p>
        <p>Em construção, aula a aula, até a banca final.</p>
      </div>
    </>
  )
}

export default App