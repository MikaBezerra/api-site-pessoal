const {pool} = require('../config/db');

exports.getAllPortfolios = async () => {
    const result = await pool.query('SELECT * FROM portfolios');
    return result.rows;
};

exports.getPortfolioById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolios WHERE id = $1', [id]);
    return result.rows[0];
};

exports.createPortfolio = async (portfolio) => {
    const result = await pool.query(`INSERT INTO portfolios (title, image, link)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [portfolio.title, portfolio.image, portfolio.link]);
    return result.rows[0];
};

exports.updatePortfolio = async (id, portfolio) => {
    const result = await pool.query(`UPDATE portfolios
    SET title = $1, image = $2, link = $3
    WHERE id = $4
    RETURNING *`, [portfolio.title, portfolio.image, portfolio.link, id]);
    return result.rows[0];
};

exports.deletePortfolio = async (id) => {
    await pool.query(`DELETE FROM portfolios WHERE id = $1`, [id]);
};
