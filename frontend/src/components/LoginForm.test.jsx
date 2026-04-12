import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginForm from './LoginForm.jsx';

describe ('Página de Login - Conteúdo Principal', () => {
  it('Deve renderizar os campos de e-mail e senha', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  })

  it('Deve conter o botão principal de Entrar', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  })

  it('Deve conter o link para a área de cadastro', () => {
    render(<LoginForm />);
    expect(screen.getByText(/cadastre-se/i)).toBeInTheDocument();
  })
})