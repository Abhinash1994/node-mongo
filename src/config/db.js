const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.DB_DATABASE,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongodb connected...');
    })
    .catch((err) => {
        console.log(err.message);
    })
    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    })

    mongoose.connection.on('disconnected', (err) => {
        console.log('Mongodb is disconnected...');
    })
}