import express from "express"
let servidor = express()

servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2
    resp.send("o resultado da soma é:" + soma)
})

servidor.get('/calculadora/subtrair/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let sub = n1 - n2
    resp.send("o resultado da subtação é:" + sub)
})

servidor.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = n1 + n2
    resp.send('a soma é:' + soma)
})
servidor.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let subtracao = n1 - n2
    resp.send('a subtração é:' + subtracao)
})


servidor.listen(5050, ()=> console.log("API subiu na porta 5050"))