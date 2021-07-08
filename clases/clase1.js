// import fs from 'fs'
const fs = require('fs')


class Producto{
    constructor(){
        this.visitas = 0
    }
    async getAll(){
        this.visitas += 1
        return JSON.parse(await fs.promises.readFile('./productos.txt', 'utf-8'))
    }
    async getOneRandon(){
        this.visitas += 1
        const productos = JSON.parse(await fs.promises.readFile('./productos.txt', 'utf-8'))
        const index = Math.floor(Math.random() * productos.length)
        return productos[index]
    }
    async getVisitas(){
        return this.visitas

    }

}

module.exports = Producto