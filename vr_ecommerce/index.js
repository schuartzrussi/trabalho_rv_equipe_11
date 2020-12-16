const express = require("express")

const https = require('https');

const fs = require('fs');

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

const app = express()

const port = 3000
const path = require("path")

const server = https.createServer({key: key, cert: cert }, app);

app.use(express.static('public'))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.get("/products/armchair", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/armchair.html"))
})

app.get("/products/piano", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/piano.html"))
})

app.get("/products/vaso", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/vaso.html"))
})

app.get("/products/fogao", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/fogao.html"))
})

// server.listen(port, "192.168.43.42", () => { console.log('listening on 3001') });
server.listen(port, "192.168.15.11", () => { console.log('listening on 3001') });

