

const express = require("express");

const server = express();

const students = [
    {
        id: 1, 
        student: "Patrick"
        
    },
    {
        id: 2, 
        student: "Lucky"
    },
    {
        id: 3, 
        student: "Dominic"
    }
];

server.get("/", (req, res) => {
    res.send("Hello World")
});

server.get("/api/students", (req, res) => {
    res.send(students)
});

server.get("/api/students/:id", (req, res) => {
    const result = students.find(course => course.id === parseInt(req.params.id));
    if (!result) res.status(404).send("the student with the given id  was not found")
    res.send(result)
});



const port = process.env.PORT || 3000

server.listen(port, () =>console.log(`Listening on port ${port}...`) )

