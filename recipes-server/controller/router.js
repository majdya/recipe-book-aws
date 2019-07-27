const express = require('express');
const cluster = require('cluster');
const path = require('path');

const recipesHandler = require('./handlers/recipes.js');
const ingredientsHandler = require('./handlers/ingredients');

const router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/api/recipes', recipesHandler.getAll);
router.post('/api/addRecipe', recipesHandler.addOne);
router.delete('/api/deleteRecipe', recipesHandler.deleteOne);

// router.get("/api/ingredients", ingredientsHandler.get);

module.exports = router;
