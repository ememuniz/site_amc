import { render, screen, fireEvent } from '@testing-library/react';
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

  it('Deve atualizar os valores ao digitar nos campos de cadastro', () => {
    render(
      <BrowserRouter>
        <CadastroForm />
      </BrowserRouter>
    );

    const nomeInput = screen.getByLabelText(/NOME COMPLETO/i);
    const codigoInput = screen.getByLabelText(/CÓDIGO DE AUTORIZAÇÃO/i);
    const emailInput = screen.getByLabelText(/E-MAIL/i);
    const senhaInput = screen.getByLabelText(/^SENHA/i);
    const confirmarSenhaInput = screen.getByLabelText(/CONFIRMAR SENHA/i);

    fireEvent.change(nomeInput, { target: { value: 'Marie Curie'}});
    fireEvent.change(codigoInput, { target: { value: 'AMC-2026'}});
    fireEvent.change(emailInput, { target: { value: 'marie@amc.org.br'}});
    fireEvent.change(senhaInput, { target: { value: 'Radium123'}});
    fireEvent.change(confirmarSenhaInput, { target: { value: 'Radium123'}});

    expect(nomeInput.value).toBe('Marie Curie');
    expect(codigoInput.value).toBe('AMC-2026');
    expect(emailInput.value).toBe('marie@amc.org.br');
    expect(senhaInput.value).toBe('Radium123');
    expect(confirmarSenhaInput.value).toBe('Radium123');
  })
})