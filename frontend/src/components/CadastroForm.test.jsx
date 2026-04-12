import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; 
import { BrowserRouter } from 'react-router-dom'; 
import CadastroForm from './CadastroForm.jsx';

describe ('Página de Cadastro', () => {
  it('Deve renderizar os campos de registro', () => {
    render(
      <BrowserRouter>
        <CadastroForm />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/NOME COMPLETO/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CÓDIGO DE AUTORIZAÇÃO/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-MAIL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^SENHA/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CONFIRMAR SENHA/i)).toBeInTheDocument();
  })

  it('Deve conter o botão de criar conta', () => {
    render(
      <BrowserRouter>
        <CadastroForm />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  })

  it('Deve conter um link para voltar ao login', () => {
    render(
      <BrowserRouter>
        <CadastroForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/entrar/i)).toBeInTheDocument();
  })
})