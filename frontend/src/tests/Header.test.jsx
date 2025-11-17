import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';


describe('Componente Header', () => {
  test('Renderiza el nombre de la tienda', () => {
    render(<Header />);
    const texto = screen.getByText(/Tienda TCG/i);
    expect(texto).toBeInTheDocument();
  });
});
