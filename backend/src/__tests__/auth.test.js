import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app.js';
import prisma from '../database/prisma.js';

describe('Teste de Autenticação e Cadastro (RF1)', () => {
  let validInviteCode = 'CODIGO_MESTRE_123';
  const testEmail = 'novo_membro@teste.com';

  //Como vamos fazer testes o tempo todo, precisamos garantir que o banco de dados esteja limpo antes de cada teste então:
  beforeAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.inviteCode.deleteMany({});

    //Criar um código de convite válido para os testes
    await prisma.inviteCode.create({
      data: {
        code: validInviteCode,
        isUsed: false
      }
    })
  })

  //Depois de todos os testes, descontectamos o Prisma pois não vamos precisar dele mais e isso ajuda a evitar conexões pendentes ou vazamentos de memória.
  afterAll(async () => {
    await prisma.$disconnect();
  })

  it('Deve retornar erro 400 se tentar cadastrar sem um código de convite', 
    async () => {
      const response = await request(app).post('/api/auth/register').send({
        email: 'membro1@teste.com',
        password: 'SenhaForte!123',
        inviteCode: '', // Código de convite vazio
      });
      expect(response.status).toBe(400);
      //expect(response.body).toHaveProperty('error');
    }
  );

  it('Deve retornar erro 400 se a senha não atender aos critérios de complixadade', 
    async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'membro2@teste.com',
          password: 'fraca',
          inviteCode: 'QUALQUER_UM'
        })
      expect(response.status).toBe(400)
      expect(response.body.error).toBe('A senha deve ter no mínimo 8 caracteres, incluindo letras, numeros e simbolos.') 
    }
  )

  it('Deve retornar erro 400 se o código de convite for inválido ou não existir',
    async () => {
      const response = await request(app)
      .post('/api/auth/register')
      .send({
        email:'membro3@teste.com',
        password: 'SenhaForte123!',
        inviteCode: 'CODIGO_FALSO_INVENTADO'
      })
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Código de convite inválido ou já utilizado');
    }
  )

  it('Deve cadastrar o usuário com sucesso com um código válido',
    async () => {
      const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: testEmail,
        password: 'SenhaForte123!',
        inviteCode: validInviteCode 
      })
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.email).toBe(testEmail);
      expect(response.body.role).toBe('MEMBER');

      //Verificar no banco se a senha não foi salva em texto puro
      const savedUser = await prisma.user.findUnique({ where: { email: testEmail } });
      expect(savedUser.password).not.toBe('SenhaForte123!'); // A senha deve estar hasheada
      const usedCode = await prisma.inviteCode.findUnique({ where: { code: validInviteCode } });
      expect(usedCode.isUsed).toBe(true); // O código de convite deve ser marcado como usado
    }
  )

  it('Deve retornar erro 401 para credenciais inválidas',
    async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'novo_membro@teste.com',
          password: 'SenhaErrada123!'
        })
      expect(response.status).toBe(401);
      expect(response.body.error).toBe('E-mail ou senha incorretos.');
    }
  )

  it('Deve fazer login com sucesso e retornar um token JWT',
    async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'novo_membro@teste.com',
          password: 'SenhaForte123!'
        })
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe('novo_membro@teste.com');
    }
  )
});
