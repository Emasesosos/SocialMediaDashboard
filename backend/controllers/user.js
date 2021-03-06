const { response } = require("express");
const InfoUsuario = require("../models/InfoUsuario");

// Crear Información Usuario
const crearInfoUsuario = async(req, res = response) => {

    // console.log(req.body);
    const infoUsuario = new InfoUsuario(req.body);
    // console.log(infoUsuario);

    try {

        const infoUsGuardado = await infoUsuario.save();

        res.status(201).json({
            ok: true,
            infoUs: infoUsGuardado
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }

};

// Obtener Info Usuarios
const getInfoUsuario = async(req, res = response) => {

    const infoUsuarios = await InfoUsuario.find();
        //.populate('user', 'name');

    res.status(201).json({
        ok: true,
        infoUsuarios
    });

};

module.exports = {
    crearInfoUsuario,
    getInfoUsuario
};