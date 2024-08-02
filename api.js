import express from "express"
let servidor = express()

servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2
    resp.send("o resultado da soma é:" + soma)
})

servidor.listen(5050, ()=> console.log("API subiu na porta 5050"))