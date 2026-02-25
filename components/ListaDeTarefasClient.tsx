"use client";

import { Tarefa } from "../data/tarefas";
import { useTarefas } from "../context/TarefasContext";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefasClient({ tarefasIniciais }: Props) {
  const { tarefas, addTarefa, toggleTarefa } = useTarefas();

  const tarefasAtuais = tarefas.length > 0 ? tarefas : tarefasIniciais;

  const { total, concluidas, pendentes } =
    useContadorDeTarefas(tarefasAtuais);

  return (
    <section>
      <h2>Suas tarefas</h2>

      <p>
        Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
      </p>

      <ul>
        {tarefasAtuais.map((tarefa) => (
          <li key={tarefa.id}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => toggleTarefa(tarefa.id)}
              />
              <span
                style={{
                  textDecoration: tarefa.concluida ? "line-through" : "none",
                  opacity: tarefa.concluida ? 0.6 : 1,
                }}
              >
                {tarefa.titulo}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <NovaTarefa onAdicionar={addTarefa} />
    </section>
  );
}