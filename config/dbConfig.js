const mongoose = require('mongoose');

function connectDB() {
    return mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Database connected');
    })
}


module.exports = connectDB;