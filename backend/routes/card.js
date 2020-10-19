/* 
    Rutas Información / Tarjeta
*/
const { Router } = require('express');
const router = Router();
const { crearInfoTarjeta, getInfoCard } = require('./../controllers/card');

// Crear Información Usuario
router.post('/', crearInfoTarjeta);
router.get('/', getInfoCard);

module.exports = router;