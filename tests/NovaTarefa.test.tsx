import { fireEvent, screen } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";
import { renderWithProvider } from "./test-utils";
import { renderHook } from "@testing-library/react";
import { TarefasProvider, useTarefas } from "../context/TarefasContext";

describe("Componente NovaTarefa", () => {
  test("renderiza input e botão", () => {
    renderWithProvider(<NovaTarefa />);

    expect(
      screen.getByPlaceholderText("Digite o título da tarefa")
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  test("mostra erro ao enviar vazio", () => {
    renderWithProvider(<NovaTarefa />);

    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));

    expect(
      screen.getByText("O título da tarefa é obrigatório.")
    ).toBeInTheDocument();
  });

  test("adiciona tarefa real no contexto", () => {
    const wrapper = ({ children }: any) => (
      <TarefasProvider>{children}</TarefasProvider>
    );

    const { result } = renderHook(() => useTarefas(), {
      wrapper,
    });

    renderWithProvider(
      <NovaTarefa onAdicionar={result.current.addTarefa} />
    );

    fireEvent.change(
      screen.getByPlaceholderText("Digite o título da tarefa"),
      { target: { value: "Tarefa nova" } }
    );

    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));

    expect(result.current.tarefas.length).toBe(1);
    expect(result.current.tarefas[0].titulo).toBe("Tarefa nova");
  });
});
