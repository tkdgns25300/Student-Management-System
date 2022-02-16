const mongoose = require('mongoose');

const connectionString = `mongodb+srv://root:tkdgns125@cluster0.yleop.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority`;

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = connectDB;