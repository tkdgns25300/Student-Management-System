const mongoose = require('mongoose');

const connectionString = `mongodb+srv://root:tkdgns125@cluster0.yleop.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority`;


mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('CONNECTED TO THE DB...'))
    .catch(err => console.log(err));