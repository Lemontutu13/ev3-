import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';


describe('Componente App', () => {
  test('Renderiza el título principal del catálogo', () => {
    render(<App />);
    const titulo = screen.getByText(/Catálogo de Cartas Pokémon/i);
    expect(titulo).toBeInTheDocument();
  });

  test('Muestra mensaje de "No hay cartas" si la lista está vacía', () => {
    render(<App />);
    const mensaje = screen.getByText(/No hay cartas disponibles/i);
    expect(mensaje).toBeInTheDocument();
  });
});
