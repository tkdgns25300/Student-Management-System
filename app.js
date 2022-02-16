const express = require('express');
const app = express();
const router = require('./routes/tasks');
const PORT = 3000;
const connectDB = require('./db/connect');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', router)

// get all the tasks

// get a single task

// create a new task

// update a task

// delete a task


const start = async () => {
    try {
        await connectDB(`mongodb+srv://root:tkdgns125@cluster0.yleop.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

start();