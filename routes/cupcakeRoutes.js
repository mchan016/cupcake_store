const express = require('express');
const cupcakeController = require('./../controllers/cupcakeController');

const router = express.Router();

///////////////////////////////////////////////////////////////////////////////
// MIDDLEWARE
///////////////////////////////////////////////////////////////////////////////
router.param('id', cupcakeController.checkID);

///////////////////////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////////////////////

router.route('/')
    .get(cupcakeController.listCupcakes)
    .post(cupcakeController.addCupcake);

router.route('/:id')
    .get(cupcakeController.getCupcakeById)
    .put(cupcakeController.updateCupcake)
    .delete(cupcakeController.deleteCupcake);

module.exports = router;