import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';

describe ('Página de Login - Conteúdo Principal', () => {
  it('Deve renderizar os campos de e-mail e senha', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  })

  it('Deve conter o botão principal de Entrar', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  })

  it('Deve conter o link para a área de cadastro', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/cadastre-se/i)).toBeInTheDocument();
  })

  it('Deve atualizar os valores ao digitar nos campos', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    fireEvent.change(emailInput, { target: { value: 'pesquisador@amc.org.br' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });
    expect(emailInput.value).toBe('pesquisador@amc.org.br');
    expect(passwordInput.value).toBe('senha123');
  })
})