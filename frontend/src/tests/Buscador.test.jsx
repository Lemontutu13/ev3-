import { render, screen, fireEvent } from "@testing-library/react";
import Buscador from "../components/Buscador";

test("El buscador se renderiza y permite escribir", () => {
  const mockBuscar = jest.fn();

  render(
    <Buscador
      onBuscarNombre={mockBuscar}
      onFiltrarTipo={() => {}}
      tipos={["Fuego", "Agua"]}
    />
  );

  const input = screen.getByPlaceholderText("Buscar por nombre de Pokémon...");
  fireEvent.change(input, { target: { value: "pika" } });

  expect(mockBuscar).toHaveBeenCalled(); 
});
