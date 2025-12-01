import { render, screen } from "@testing-library/react";
import HomePage from "../app/page";
import * as api from "../data/tarefas";
import { TarefasProvider } from "../context/TarefasContext";

jest.mock("../data/tarefas");

describe("Página principal", () => {
  test("renderiza tarefas iniciais da API", async () => {
    (api.buscarTarefas as jest.Mock).mockResolvedValue([
      { id: 1, titulo: "Primeira tarefa", concluida: false },
      { id: 2, titulo: "Segunda tarefa", concluida: true },
    ]);

    const Page = await HomePage();

    render(<TarefasProvider>{Page}</TarefasProvider>);

    expect(screen.getByText("Primeira tarefa")).toBeInTheDocument();
    expect(screen.getByText("Segunda tarefa")).toBeInTheDocument();

    expect(screen.getByTestId("resumo-tarefas")).toHaveTextContent("Total: 2");
  });
});
