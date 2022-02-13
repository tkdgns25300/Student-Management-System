const express = require('express');
const app = express();

const PORT = 3000;

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

// get all the tasks

// get a single task

// create a new task

// update a task

// delete a task

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})