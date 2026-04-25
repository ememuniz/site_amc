import bcrypt from 'bcrypt';
import prisma from '../database/prisma.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password, inviteCode } = req.body;

    //Validações iniciais
    if (!inviteCode) {
      return res.status(400).json({ error: 'Código de convite é obrigatório'})
    }
    //Usaremos Regex (Expressões regulares)
    //(?=.*[a-zA-Z]) - Deve conter pelo menos uma letra maiúscula ou minúscula
    //(?=.*/d) - Deve conter pelo menos um número
    //(?=.*[\W_]) - Deve conter pelo menos um caractere especial(simbolo)
    //.{8,} - Deve conter no mínimo 8 caracteres
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)){
      return res.status(400).json({
        error: 'A senha deve ter no mínimo 8 caracteres, incluindo letras, numeros e simbolos.'
      })
    }

    //Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    if (existingUser) {
      return res.status(400).json({ error: 'Este email já está em uso' })
    }

    //Validar o código de convite no Banco de Dados
    const validCode = await prisma.inviteCode.findUnique({
      where: { code: inviteCode }
    })
    if (!validCode || validCode.isUsed) {
      return res.status(400).json({error: 'Código de convite inválido ou já utilizado'})
    }

    //Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //Salvar o usuário e atualizar o código
    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          role: 'MEMBER'  
        }
      })

      await tx.inviteCode.update({
        where: { id: validCode.id },
        data: { isUsed: true }
      })

      return user;
    })

    return res.status(201).json({ 
      id: newUser.id,
      email: newUser.email,
      role: newUser.role
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Busca o usuário pelo email
    const user = await prisma.user.findUnique({
      where: { email }
    })
    if (!user) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }

    //Comparar a senha enviada com a senha criptografada no banco
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.'});
    }

    //Gerar token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor.' })
  }
}
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select:{
        id: true,
        email: true,
        role: true,
        createdAt: true
      }
    })
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });    
  }
}