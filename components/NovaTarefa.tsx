// components/NovaTarefa.tsx
"use client";

import { FormEvent, useState } from "react";

type Props = {
  onAdicionar?: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!titulo.trim()) {
      setErro("O título da tarefa é obrigatório.");
      return;
    }

    setErro("");

    if (onAdicionar) {
      onAdicionar(titulo.trim());
    }

    setTitulo("");
  }

  return (
    <section>
      <h2>Adicionar nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Título da tarefa"
          placeholder="Digite o título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button type="submit">Adicionar</button>

        {erro && <p style={{ color: "red" }}>{erro}</p>}
      </form>
    </section>
  );
}
