const portfoliosExperiencias = require('../repositories/portfoliosRepository');

exports.getAllPortfolios = async (req, res) => {
    const portfolios = await portfoliosExperiencias.getAllPortfolios();
    res.json(portfolios);
};

exports.getPortfolioById = async (req, res) => {
    const id = parseInt(req.params.id);
    const portfolio = await portfoliosExperiencias.getPortfolioById(id);
    res.json(portfolio);
};

exports.createPortfolio = async (req, res) => {
    const portfolio = req.body;
    const newPortfolio = await portfoliosExperiencias.createPortfolio(portfolio);
    res.json(newPortfolio);
};

exports.updatePortfolio = async (req, res) => {
    const id = parseInt(req.params.id);
    const portfolio = req.body;
    const updatedExperiencia = await portfoliosExperiencias.updatePortfolio(id, portfolio);
    res.json(updatedExperiencia);
};

exports.deletePortfolio = async (req, res) => {
    const id = parseInt(req.params.id);
    await portfoliosExperiencias.deletePortfolio(id);
    res.json({message: `Portfolio ${id} excluido com sucesso!`});
};