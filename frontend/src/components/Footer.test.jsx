import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer.jsx';

describe ('Componente Footer', () => {
  it('Deve renderizar o nome da Academia na descrição', () => {
    render(<Footer />);
    expect(screen.getByText(/Academia Maranhense de Ciência/i)).toBeInTheDocument();
  })

  it('Deve conter a seção de Links Rápidos', () => {
    render(<Footer />);
    expect(screen.getByText('Links Rápidos')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Inicio'})).toBeInTheDocument();
  })

  it('Deve conter o e-mail de contato', () => {
    render(<Footer />);
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato@amc.org.br/i })).toBeInTheDocument();
  })
})