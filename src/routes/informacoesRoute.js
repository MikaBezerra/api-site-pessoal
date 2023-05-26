const express = require('express');
const informacoesController = require('../controllers/informacoesController');

const router = express.Router(); 

router.get('/1', informacoesController.getAllInformacoes);
router.post('/',informacoesController.createInformacao); 
router.put('/1', informacoesController.updateInformacao); 
router.delete('/1', informacoesController.deleteInformacao); 

module.exports = router;