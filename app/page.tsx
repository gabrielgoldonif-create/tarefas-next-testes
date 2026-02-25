import { buscarTarefas } from "../data/tarefas";
import { TarefasProvider } from "../context/TarefasContext";
import ListaDeTarefasClient from "../components/ListaDeTarefasClient";

export default async function HomePage() {
  const tarefas = await buscarTarefas();

  return (
    <main className="page">
      <div className="main-container">
        <h1>Lista de Tarefas</h1>

        <TarefasProvider>
          <ListaDeTarefasClient tarefasIniciais={tarefas} />
        </TarefasProvider>
      </div>
    </main>
  );
}