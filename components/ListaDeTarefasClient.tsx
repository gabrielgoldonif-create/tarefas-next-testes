"use client";

import { Tarefa } from "../data/tarefas";
import { useTarefas } from "../context/TarefasContext";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import NovaTarefa from "./NovaTarefa";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefasClient({ tarefasIniciais }: Props) {
  const { tarefas, addTarefa } = useTarefas();

  const tarefasAtuais = tarefas.length > 0 ? tarefas : tarefasIniciais;

  const { total, concluidas, pendentes } =
    useContadorDeTarefas(tarefasAtuais);

  return (
    <section>
      <h2>Suas tarefas</h2>

      <p data-testid="resumo-tarefas">
        Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
      </p>

      <ul>
        {tarefasAtuais.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>

      <NovaTarefa onAdicionar={addTarefa} />
    </section>
  );
}
