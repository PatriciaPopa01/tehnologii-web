import {c,funct} from './second.js'

import fs from 'fs'
import path from 'path'
import {rimraf} from 'rimraf'

//ex1
console.log(c)
console.log(funct(c,c))

//ex2
const caleCompleta = path.join('.','ex2folder','fisier.txt')
const caleDir = path.join('.','ex2folder')

fs.mkdirSync(caleDir,{recursive:true})
fs.writeFileSync(caleCompleta,`Constanta importata la exercitiul anterior: ${c}`)

await rimraf(caleDir)


//ex3
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

let app = express()
let router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use('/api', router)

const arrayDepartamente = [
    { id: 1, name: "HR", nrAngajati: 10 },
    { id: 2, name: "IT", nrAngajati: 30 },
    { id: 3, name: "Finance", nrAngajati: 6 },
    { id: 4, name: "Sales", nrAngajati: 12 },
    { id: 5, name: "Marketing", nrAngajati: 20 }
]

router.route('/getList').get((req,res)=>{
    res.json(arrayDepartamente)
})

router.route('/postList').post((req,res)=>{
    let element = req.body
    element.id = arrayDepartamente.length+1
    arrayDepartamente.push(element)

    res.json(element)
})

router.route('/getList/:id').get((req,res)=>{
    const id = Number(req.params.id)
    let element = arrayDepartamente.find(d => d.id===id)
    if(!element)
        return res.status(404).json({ error: "Nu exista acest departament" });
    res.json(element)
})

let port =8000
app.listen(port, () => {console.log(`serverul ruleaza pe port-ul: ${port}`)})