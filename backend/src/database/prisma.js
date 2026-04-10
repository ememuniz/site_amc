// src/database/prisma.js
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

// Garante que o teste consiga ler o nosso arquivo .env
dotenv.config();

// 1. Pega a URL do banco de dados do .env
const connectionString = process.env.DATABASE_URL;

// 2. Cria um "Pool" (gerenciador de conexões) nativo do PostgreSQL
const pool = new Pool({ connectionString });

// 3. Cria o adaptador do Prisma para usar esse Pool
const adapter = new PrismaPg(pool);

// 4. Inicia o Prisma passando o adaptador! (Exigência do Prisma 7)
const prisma = new PrismaClient({ adapter });

export default prisma;