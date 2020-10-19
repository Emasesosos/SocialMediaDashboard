/* 
    Rutas Información / Usuario
*/
const { Router } = require('express');
const router = Router();
const { crearInfoUsuario, getInfoUsuario } = require('./../controllers/user');

// Crear Información Usuario
router.post('/', crearInfoUsuario);
router.get('/', getInfoUsuario);

module.exports = router;