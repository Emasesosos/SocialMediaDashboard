const { response } = require("express");
const InfoCard = require("../models/InfoCard");

// Crear Información Usuario
const crearInfoTarjeta = async(req, res = response) => {

    console.log(req.body);
    const infoCard = new InfoCard(req.body);
    // console.log(infoUsuario);

    try {

        const infoCardGuardado = await infoCard.save();

        res.status(201).json({
            ok: true,
            infoCard: infoCardGuardado
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
const getInfoCard = async(req, res = response) => {

    const infoCards = await InfoCard.find();
        //.populate('user', 'name');

    res.status(201).json({
        ok: true,
        infoCards
    });

};

module.exports = {
    crearInfoTarjeta,
    getInfoCard
};