import prisma from '../database/prisma.js';
import crypto from 'crypto';

export const generateInviteCode = async (req, res) => {
  try {
    const randomCode = crypto.randomBytes(4).toString('hex').toUpperCase();

    const newInvite = await prisma.inviteCode.create({
      data: {
        code: randomCode,
        isUsed: false
      }
    })
    return res.status(201).json(newInvite);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao gerar código de convite.'});
  }
}