const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online on Port: ', process.env.DB_CNN);
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD');
    }

};

module.exports = {
    dbConnection
};