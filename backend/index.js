// Configuración básica de Express
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));
// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/user', require('./routes/user'));

// Escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});