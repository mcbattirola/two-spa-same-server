const path = require("path");
const express = require("express");
const app = express(); // create express app

const filePathAngular = path.join(__dirname, "angular-app", "dist", "angular-app")
const filePathReact = path.join(__dirname, "react-app", "build")

// app.use(express.static(filePathAngular));
app.use(express.static(filePathReact));
app.get('/', (req, res) => {res.sendFile(path.join(filePathReact, 'index.html'))})

app.use(express.static(filePathAngular));
app.get('/login', (req, res) => {res.sendFile(path.join(filePathAngular, 'index.html'))})

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});


// const path = require('path')
// const express = require('express')
// const app = express()
// const publicPath = path.join(__dirname, '..', 'public')
// const port = process.env.PORT || 3000

// app.use(express.static(publicPath))
// app.get('*', (req, res) => {res.sendFile(path.join(publicPath, 'index.html'))
// });app.listen(port, () => {console.log('Servidor online!');});