/* 
    Rutas Información / Usuario
*/
const { Router } = require('express');
const router = Router();
const { crearInfoUsuario } = require('./../controllers/user');

// Crear Información Usuario
router.post('/', crearInfoUsuario);

module.exports = router;