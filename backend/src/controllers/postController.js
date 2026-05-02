import prisma from "../database/prisma.js";

export const createPost = async (req, res) => {
  try {
    const { titulo, corpo } = req.body;
    const userId = req.userId;

    if (!titulo || !corpo) {
      return res.status(400).json({ error: 'O título e o conteúdo são obrigatórios.' });
    }

    const newPost = await prisma.post.create({
      data: {
        title: titulo,
        content: corpo,
        status: 'PUBLICADO',
        authorId: userId
      }
    });

    return res.status(201).json({message: 'Postagem criada com sucesso!', post: newPost});
  } catch (error) {
    console.error('Erro ao criar postagem:', error);
    return res.status(500).json({ error: 'Erro interno ao salvar a postagem.'})
  }
}
