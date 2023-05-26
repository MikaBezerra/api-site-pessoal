const express = require('express');
const portfoliosController = require('../controllers/portfoliosController');

const router = express.Router(); 

router.get('/', portfoliosController.getAllPortfolios);
router.get('/:id', portfoliosController.getPortfolioById);
router.post('/', portfoliosController.createPortfolio); 
router.put('/:id', portfoliosController.updatePortfolio); 
router.delete('/:id', portfoliosController.deletePortfolio); 

module.exports = router;