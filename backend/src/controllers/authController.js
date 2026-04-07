export const register = async (req, res) => {
  try {
    const { email, password, inviteCode } = req.body;

    if (!inviteCode) {
      return res.status(400).json({ error: 'Código de convite é obrigatório'})
    }

    return res.status(200).json({ message: "Passou na primeira validação!"})
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}