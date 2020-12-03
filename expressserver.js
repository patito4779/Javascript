// Here is the proper way to create a server with variable ports

const express = require("express")

const server = express();

server.get("/", (req, res) => {
    res.send("Hello world");

});
server.get("/api/patrick", (req, res) => {
    res.send("Hello patrick")
});

// PORT
//To run program in terminal run nodemon httpserver2.js followed by exit(ctrl+ C)
//the run set PORT = 5000. For mac use export = 5000.
// this is used to read port and assign a port to it
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`))

//To run program in terminal run nodemon httpserver2.js followed by exit(ctrl+ C)
//the run set PORT = 5000. Then Listening on port 5000.. will be displayed.







