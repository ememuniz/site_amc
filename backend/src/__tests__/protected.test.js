import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import prisma from '../database/prisma.js';
import jwt from 'jsonwebtoken';

describe('Teste do Middleware de Autentificação', () => {
  let validToken;
  beforeAll(async () => {
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'teste_secret'
    await prisma.user.deleteMany({});
    const user = await prisma.user.create({
      data: {
        email: 'vip@teste.com',
        password: 'hashqualquer',
        role : 'MEMBER'
      }
    })
    validToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  })
  afterAll(async () => {
    await prisma.$disconnect();
  })

  it('Deve barrar o acesso se nenhum token for enviado', async () => {
    const response = await request(app).get('/api/auth/me');
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Token não fornecido');
  })

  it ('Deve barrar o acesso se o token for inválido', async () => {
    const response = await request(app)
      .get('/api/auth/me')
      .set('Authorization', 'Bearer token_falso_inventado');
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Token inválido ou expirado');
  })

  it('Deve permitir o acesso se o token for válido', async () => {
    const response = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${validToken}`);
    expect(response.status).toBe(200);
    expect(response.body.email).toBe('vip@teste.com');
  })
})