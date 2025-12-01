// hooks/useContadorDeTarefas.ts
"use client";

import { useMemo } from "react";
import type { Tarefa } from "../data/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = useMemo(() => tarefas.length, [tarefas]);
  const concluidas = useMemo(
    () => tarefas.filter((t) => t.concluida).length,
    [tarefas]
  );
  const pendentes = useMemo(() => total - concluidas, [total, concluidas]);

  return { total, concluidas, pendentes };
}
