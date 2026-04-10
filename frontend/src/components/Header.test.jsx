import {render, screen} from '@testing-library/react';
import Header from './Header';
import { describe, expect, it } from 'vitest';

describe ('Componente Header', () => {
  it('Deve renderizar o logotipo da AMC', () => {
    render(<Header />);
    expect(screen.getByAltText('Logotipo da AMC')).toBeInTheDocument();
  });

  it('Deve conter os links de navegação principais', () => {
    render(<Header />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Membros')).toBeInTheDocument();
  });

  it('Deve ter o botão do Portal de Membros', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: /Portal de Membros/i});
    expect(button).toBeInTheDocument();
  })
})