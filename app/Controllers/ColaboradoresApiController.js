const ColaboradoresModel = require('../Models/ColaboradoresModel');

const ColaboradoresApiController = {
  // Listar todos os colaboradores
  async list(req, res) {
    const colaboradores = await ColaboradoresModel.findAll();
    res.json(colaboradores);
  },

  // Obter um colaborador por ID
  async get(req, res) {
    const { id } = req.params;
    const colaborador = await ColaboradoresModel.findByPk(id);
    
    if (!colaborador) {
      return res.status(404).json({ erro: 'Colaborador não encontrado' });
    }

    res.json(colaborador);
  },

  // Inserir um novo colaborador
  async insert(req, res) {
    const { nome, email, ativo } = req.body;

    try {
      const novoColaborador = await ColaboradoresModel.create({ nome, email, ativo });
      res.status(201).json(novoColaborador);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao inserir colaborador', detalhes: error.message });
    }
  }
};

module.exports = ColaboradoresApiController;
