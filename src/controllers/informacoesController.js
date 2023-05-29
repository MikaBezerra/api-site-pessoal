const informacoesRepository = require('../repositories/informacoesRepository');

exports.getAllInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getAllInformacoes();
    if (informacoes.length > 0) {
      res.json(informacoes[0]);
    } else {
      res.json(null);
    }
  };
  

exports.createInformacao = async (req, res) => {
    const informacao = req.body;
    const newInformacao = await informacoesRepository.createInformacao(informacao);
    res.json(newInformacao);
};

exports.updateInformacao = async (req, res) => {
    const informacao = req.body;
    const updatedInformacao = await informacoesRepository.updateInformacao(informacao);
    res.json(updatedInformacao);
};

exports.deleteInformacao = async (req, res) => {
    await informacoesRepository.deleteInformacao();
    res.json({message: `Informacões excluidas com sucesso!`});
};