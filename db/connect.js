const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to the DB...'))
        .catch(err => console.error(err.message));
}

module.exports = connectDB;