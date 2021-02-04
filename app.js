const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fetch = require("node-fetch")

const buscarcep = require('./src/funcao/buscar')

app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())


app.set('view engine', 'ejs')
app.set('views', './src/views')


app.get("/", (req, res) => {
    res.render('index')
});

app.post("/envia-cep",async(req, res) => {
    const { cep } = req.body;
    const resultado = await buscarcep(cep);

    res.render('resultado',{dado: resultado})
});

app.listen(3004)