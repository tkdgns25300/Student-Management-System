const express = require('express');
const app = express();
const router = require('./routes/tasks');
const PORT = 3000;
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes


app.use('/api/v1/tasks', router)
// get all the tasks
// get a single task
// create a new task
// update a task
// delete a task


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

start();