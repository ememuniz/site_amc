import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('Teste de Autenticação e Cadastro (RF1)', () => {
  it('Deve retornar erro 400 se tentar cadastrar sem um código de convite', async () => {
    const response = await request(app).post('/api/auth/register').send({
      email: 'membro@teste.com',
      password: 'senha123',
      inviteCode: '', // Código de convite vazio
    });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
