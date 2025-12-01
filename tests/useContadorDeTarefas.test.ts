import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import type { Tarefa } from "../data/tarefas";

describe("Hook useContadorDeTarefas", () => {
  const tarefas: Tarefa[] = [
    { id: 1, titulo: "A", concluida: false },
    { id: 2, titulo: "B", concluida: true },
    { id: 3, titulo: "C", concluida: false },
  ];

  test("retorna contagem correta", () => {
    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current.total).toBe(3);
    expect(result.current.concluidas).toBe(1);
    expect(result.current.pendentes).toBe(2);
  });
});
