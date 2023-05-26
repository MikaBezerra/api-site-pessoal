const {pool} = require('../config/db');

exports.getAllInformacoes = async () => {
    const result = await pool.query(`SELECT * FROM informacoes`);
    return result.rows;
};

exports.createInformacao = async (informacao) => {
    const result = await pool.query(`INSERT INTO informacoes (id, foto, nome, cargo, resumo)
    VALUES (1, $1, $2, $3, $4)
    RETURNING *`, [informacao.foto, informacao.nome, informacao.cargo, informacao.resumo]);
    return result.rows[0];
};

exports.updateInformacao = async (informacao) => {
    const result = await pool.query(`UPDATE informacoes 
    SET foto = $1, nome = $2, cargo = $3, resumo = $4
    WHERE id = 1
    RETURNING *`, [informacao.foto, informacao.nome, informacao.cargo, informacao.resumo]);
    return result.rows[0];
};

exports.deleteInformacao = async () => {
    await pool.query('DELETE FROM informacoes');
};