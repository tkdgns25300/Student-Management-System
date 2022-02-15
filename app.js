require('./db/connect');
const express = require('express');
const app = express();
const router = require('./routes/tasks');
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})
