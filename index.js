const express = require('express')
const bodyParser = require('body-parser')

const producto = require('./clases/clase1');

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080
const productos = new producto()
    

app.get('/item', async (req,res) =>{
    const productos_ = await productos.getAll()
    res.send(productos_)
})

app.get('/item-random', async (req,res) =>{
    const productoRandom = await productos.getOneRandon()
    res.send(productoRandom)
})

app.get('/visitas', async (req,res) =>{
    const visitas = await productos.getVisitas()
    res.send(`${visitas} Visitas`)
})


const server = app.listen( PORT, () => {
    console.log(`Server running ${PORT}`)
})

server.on('Error', err => console.log(`Error ${err}`))