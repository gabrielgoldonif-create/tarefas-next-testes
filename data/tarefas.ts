// data/tarefas.ts

export type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: "Estudar Next.js 15", concluida: false },
  { id: 2, titulo: "Escrever testes unitários", concluida: false },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  // Simula uma API
  return Promise.resolve(tarefasIniciais);
}
