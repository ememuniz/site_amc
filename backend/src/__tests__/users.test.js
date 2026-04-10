import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../app.js";
import prisma from "../database/prisma.js";
import jwt from "jsonwebtoken";

describe('Testes de Gestão de Usuários', () => {
  let validToken;

  beforeAll(async () => {
    await prisma.user.deleteMany({});

    const user1 = await prisma.user.create({
      data: { email: 'alfa@amc.org.br', password: 'hash', role: 'ADMIN' }
    })
    await prisma.user.create({
      data: { email: 'beta@amc.org.br', password: 'hash', role: 'MEMBER' }
    })
    validToken= jwt.sign({ id: user1.id, role: user1.role }, process.env.JWT_SECRET);
  })

  afterAll(async () => {
    await prisma.$disconnect();
  })

  it('Deve barrar o acesso à lista de usuários se não estiver logado', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(401);
  })

  it('Deve listar os usuários com sucesso e não retornar as senhas', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${validToken}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    expect(response.body[0]).not.toHaveProperty('password');
    expect(response.body[0]).toHaveProperty('email');
  })
})