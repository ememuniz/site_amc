import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../app.js";
import prisma from "../database/prisma.js";
import jwt from "jsonwebtoken";

describe('Testes de permissões de Admin (Geração de Convites)', () => {
  let memberToken;
  let adminToken;

  beforeAll(async () => {
    await prisma.user.deleteMany({});

    const member = await prisma.user.create({
      data: {email: 'comum@amc.org.br', password: 'hash', role:'MEMBER'}
    })
    const admin = await prisma.user.create({
      data: {email: 'admin@amc.org.br', password: 'hash', role:'ADMIN'}
    })

    memberToken = jwt.sign({ id: member.id, role: member.role }, process.env.JWT_SECRET);
    adminToken = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET);
  })

  afterAll(async () => {
    await prisma.$disconnect();
  })

  it('Deve barrar um MEMBER de gerar código de convite (Erro 403 forbidden)', async () => {
    const response = await request(app)
      .post('/api/admin/invites')
      .set('Authorization', `Bearer ${memberToken}`)
    expect(response.status).toBe(403);
    expect(response.body.error).toBe('Acesso negado. Apenas administradores.');
  })

  it('Deve permitir que um ADMIN gere um código de convite com sucesso', async () => {
    const response = await request(app)
      .post('/api/admin/invites')
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('code');
    expect(response.body.isUsed).toBe(false);
  })
})