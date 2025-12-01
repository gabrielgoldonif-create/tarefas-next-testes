import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { TarefasProvider } from "../context/TarefasContext";

export function renderWithProvider(ui: ReactNode) {
  return render(<TarefasProvider>{ui}</TarefasProvider>);
}
