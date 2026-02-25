"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Tarefa } from "../data/tarefas";

type TarefasContextType = {
  tarefas: Tarefa[];
  addTarefa: (titulo: string) => void;
  toggleTarefa: (id: number) => void;
};

const TarefasContext = createContext<TarefasContextType | null>(null);

export function TarefasProvider({ children }: { children: ReactNode }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function addTarefa(titulo: string) {
    const nova: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };
    setTarefas((prev) => [...prev, nova]);
  }

  function toggleTarefa(id: number) {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  return (
    <TarefasContext.Provider value={{ tarefas, addTarefa, toggleTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  const ctx = useContext(TarefasContext);
  if (!ctx) throw new Error("useTarefas deve ser usado dentro de TarefasProvider");
  return ctx;
}