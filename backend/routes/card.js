/* 
    Rutas Información / Tarjeta
*/
const { Router } = require('express');
const router = Router();
const { crearInfoTarjeta } = require('./../controllers/card');

// Crear Información Usuario
router.post('/', crearInfoTarjeta);

module.exports = router;