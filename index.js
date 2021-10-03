let express = require('express')
let app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
})

app.get("/user", (req, res) => {
    let firstname = req.query['fnm']
    let lastname = req.query['lnm']

    response = {
        firstname,
        lastname
    }

    res.send(response)

})

app.post("/user/:fnm/:lnm", (req, res) => {
    let firstname = req.params['fnm']
    let lastname = req.params['lnm']

    response = {
        firstname,
        lastname
    }

    res.send(response)

})

let server = app.listen(8089, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("server running at http://%s:%s", host, port)
})